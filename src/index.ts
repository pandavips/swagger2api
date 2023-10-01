import chalk from "chalk";
import { render } from "eta";
import fs from "fs";
import { mkdirp } from "mkdirp";
import { join } from "path";
import {
  chineseCharacter2pinyin,
  compileTs,
  fetchData,
  firstUpperCase,
  getCurrentDirName,
  isUrl,
  JavaType2JavaScriptType,
  removeSpecialCharacter,
} from "./utils";

export * from "./utils";

const genApi = async (config: Config) => {
  const {
    rawJson,
    outDir,
    templatePath,
    apiUrlPrefix,
    needJS = false,
    modular = true,
    axiosPath = "../request",
  } = config;

  const apiTemplatePath = templatePath?.api ?? join(
    getCurrentDirName(import.meta.url),
    "./template/apis.eta"
  )
  const dtsTemplatePath = templatePath?.api ?? join(
    getCurrentDirName(import.meta.url),
    "./template/dts.eta"
  )

  const rawData = isUrl(rawJson) ? (await fetchData(rawJson)).data : rawJson;

  const BaseArrayType = "baseArrayType";
  const interfaces: any[] = [];
  const definitions = rawData.definitions;
  // 初步将数据整理成适合我们的形状
  const rawDatahandle = (rawData) => {
    const { paths } = rawData;

    const result: any[] = [];

    // 路径
    for (const path in paths) {
      const pathData = paths[path];
      // 方法
      for (const method in pathData) {
        const methodData = pathData[method];
        const { tags, summary, parameters = [], responses = [] } = methodData;

        // 封装请求信息
        const reqInfo = {
          header: [],
          body: [],
        };
        parameters.forEach((parameter) => {
          const {
            name,
            in: inType,
            description,
            required,
            type,
            schema,
          } = parameter;

          const genReqInfoNode = () => ({
            name,
            description,
            required,
            type: JavaType2JavaScriptType[type],
            schema: schemaName2json(schema),
          });

          reqInfo[inType]
            ? reqInfo[inType].push(genReqInfoNode())
            : (reqInfo[inType] = [genReqInfoNode()]);
        });

        // 响应信息,一般我们只专注于200的响应体数据
        const responseBody = responses["200"];
        const resInfo = {
          description: responseBody.description,
          schema: schemaName2json(responseBody.schema),
        };

        const finalPath = path.slice(apiUrlPrefix?.length || 0);
        result.push({
          path: finalPath,
          method: method.toUpperCase(),
          summary,
          tags,
          reqInfo,
          resInfo,
        });
      }
    }

    return result;
  };
  // 将schema转换成我们需要的形状
  const schemaName2json = (schema: any) => {
    if (!schema) return null;

    const schemaName =
      (schema?.$ref || schema?.items?.$ref)?.split("/").pop() || "";
    if (schemaName === "禁用请求信息") return null;

    const schemaData = definitions[schemaName];
    if (!schemaData) return null;

    const schemaType = JavaType2JavaScriptType[schema.type] || "";
    const schemaItemsType = schema?.items?.type;

    if (schemaType === "array" && schemaItemsType) {
      return {
        title: BaseArrayType,
        schemaType: JavaType2JavaScriptType[schemaItemsType],
      };
    }

    const { title, type, properties, required = [] } = schemaData;

    return {
      title,
      schemaType,
      type: JavaType2JavaScriptType[type],
      properties,
      required,
    };
  };
  // 生成接口类型定义数据
  const addInterface = (body, parentInterName = "rootParentInterName") => {
    if (!body) return null;

    // 定义接口类型名称
    let InterfaceName = "I" + chineseCharacter2pinyin(body.title);
    // 如果是循环应用,直接返回父级接口名称,避免死循环
    if (parentInterName === InterfaceName) return parentInterName;

    // 分页和嵌套[无意间附带的效果]对象
    const pageResultReg = /«(.*?)»/;
    const matchResult = InterfaceName.match(pageResultReg) || [];
    const rowsRawType = matchResult[1];
    const isPageResult = !!rowsRawType;

    // 如果是分页对象,接口名称更改为更具体的名称
    if (isPageResult) {
      // TODO 分页接口的定义应该考虑使用泛型类,而不是为每一个数据类型定义一个接口,后续再做...
      const rowsInterfaceType = "I" + chineseCharacter2pinyin(rowsRawType);
      InterfaceName =
        InterfaceName.replace(pageResultReg, "") + "On" + rowsInterfaceType;
    }

    // 至此接口名称已经敲定 --end

    // 如果已经有该类型的接口定义，就不再添加
    if (interfaces.find((item) => item.name === InterfaceName)) {
      return InterfaceName;
    }

    // 所有属性字段
    const props = body.properties;
    if (!props) return;
    // 必填字段
    const requiredKeys = body.required || [];
    // 成员schema
    const propsSchema: any = [];

    // 开始循环处理每一个字段
    Object.keys(props).forEach((key) => {
      const prop = props[key];
      let propType = JavaType2JavaScriptType[prop.type];
      const required = requiredKeys.includes(key);
      const description = prop.description;
      const hasDescription = !!description;

      const ref = (() => {
        if (prop?.$ref) {
          propType = "object";
          return prop?.$ref;
        }
        if (prop?.items?.$ref) {
          propType = "array";
          return prop?.items?.$ref;
        }
        return prop?.$ref || prop?.items?.$ref;
      })();

      const isRef = !!ref;
      // 有子集类型
      if (isRef) {
        let childSchemaName, type;
        // 子集是对象,则循环调用addInterface
        if (propType === "object") {
          const childBody = schemaName2json(prop);
          childSchemaName = addInterface(childBody, InterfaceName);
          type = childSchemaName;
        }
        // 数组,分页的子集也会进入这个分支
        else if (propType === "array") {
          const childBody = schemaName2json(prop);
          childSchemaName = addInterface(childBody, InterfaceName);
          type = childSchemaName + "[]";
        }
        propsSchema.push({
          key,
          type,
          required,
          description,
          hasDescription,
        });
      } else {
        if (propType === "array") {
          propType = JavaType2JavaScriptType[prop.items?.type || 'any'] + "[]";
        }
        propsSchema.push({
          key,
          type: propType,
          required,
          description,
          hasDescription,
        });
      }
    });

    interfaces.push({
      name: InterfaceName,
      schema: propsSchema,
      // 对象类型默认必填
      required: true,
      type: body.type,
    });

    return InterfaceName;
  };

  // 转换层,其作用是尽量使模板文件简洁,在模板里写逻辑真是太痛苦了
  const transform = (apiData) => {
    const result: any[] = [];

    apiData.forEach((api) => {
      const { path, method, summary, tags, reqInfo, resInfo } = api;
      const description = tags[0] + " - " + summary;
      const urlEndParamReg = /{(.*?)}/g;
      const matchResult: any = [];

      // 分组信息
      const group = {
        name: tags[0] || "orphan",
        prefix: path.split("/")[1] || "orphan",
      };

      let r;
      while ((r = urlEndParamReg.exec(path)) !== null) {
        matchResult.push(r);
      }

      let url = "/" + path.split("/").slice(1).join("/");

      // 是否是末尾路径参数
      const codeName = matchResult.map((r) => firstUpperCase(r[1])).join("");
      const isUrlEndParam = !!codeName;

      const CODE_LINK = "ByCode";
      const apiName = removeSpecialCharacter(
        url
          .replaceAll(urlEndParamReg, "")
          .split("/")
          .map(firstUpperCase)
          .join("") +
        // 路径参数添加特殊标识
        (isUrlEndParam ? CODE_LINK + codeName : "") +
        method
      );

      const queryCodeUrl = "/" + matchResult.map((r) => `$${r[0]}`).join("/");

      url = isUrlEndParam
        ? url.replace(urlEndParamReg, "") + `${queryCodeUrl}`
        : url;
      // 干掉路径中多余的斜杆
      url = url.replaceAll(/\/{2,}/g, "/");
      const params = isUrlEndParam ? matchResult.map((r) => r[1]) : ["data"];

      let hasQueryParams = false;
      // 准备请求参数接口数据
      const reqBody = (() => {
        // 一般情况下不会同时存在body和query参数
        const body = reqInfo.body[0]?.schema ?? null;
        const formData = reqInfo.formData ?? null;
        const query = reqInfo.query ?? null;

        // 转换query参数为post参数
        if (query) {
          const queryBody = {
            title: apiName + "ReqQuery",
            type: "object",
            properties: {
              ...query.reduce((acc, cur) => {
                acc[cur.name] = {
                  type: cur.type,
                  description: cur.description,
                };
                return acc;
              }, {}),
            },
          };
          // url处理
          hasQueryParams = true;
          // url = `${url}${isUrlEndParam ? "" : "?${qs.stringify(data)}"}`;
          return queryBody;
        }
        if (formData) {
          const queryBody = {
            title: apiName + "FromData",
            type: "object",
            properties: {},
          };
          // url处理
          // hasQueryParams = true;
          // url = `${url}${isUrlEndParam ? "" : "?${qs.stringify(data)}"}`;
          return queryBody;
        }

        return body;
      })();
      const hasReqBody = !!reqBody;
      const reqType =
        hasReqBody &&
        (reqBody.title === BaseArrayType
          ? reqBody.schemaType + "[]"
          : addInterface(reqBody) || null);

      const reqShemaType = hasReqBody && reqBody.schemaType;
      // 准备响应参数接口数据
      const resBody = resInfo?.schema || null;
      const hasResBody = !!resBody;
      const resType = (hasResBody && addInterface(resBody)) || null;
      const resShemaType = hasResBody && resBody.schemaType;
      result.push({
        hasQueryParams,
        isUrlEndParam,
        apiName,
        url,
        group,
        params,
        method,
        description,
        hasReqBody,
        reqType: reqShemaType === "array" ? `${reqType}[]` : reqType,
        hasResBody,
        resType:
          resShemaType === "array"
            ? `Required<${resType}>[]`
            : resType === null
              ? null
              : `Required<${resType}>`,
      });
    });

    return result;
  };

  const wiriteFile = async (url: string, filename: string, data: string) => {
    await mkdirp(url);
    fs.writeFileSync(join(url, filename), data);
  };

  // 处理数据
  const apiData = rawDatahandle(rawData);
  const apiDataTransformed = transform(apiData);

  const apiTemplateStr = fs.readFileSync(apiTemplatePath, "utf-8");
  const dtsTemplateStr = fs.readFileSync(dtsTemplatePath, "utf-8");

  const dtsTStr = render(dtsTemplateStr, { interfaces });

  // 如果需要分组,则按照分组生成文件
  if (modular) {
    const groups = apiDataTransformed.reduce((acc, cur) => {
      const { group } = cur;
      const { prefix, name } = group;
      acc[prefix] = acc[prefix] || [];
      acc[prefix].push({ ...cur, prefix, name });
      return acc;
    }, {});

    // 默认导出文件内容
    let indexStr = ``;

    for (const key in groups) {
      await wiriteFile(
        join(outDir, "./modules/"),
        `./${key}.ts`,
        render(apiTemplateStr, { apis: groups[key], axiosPath })
      );
      // 编译ts
      needJS && compileTs(join(outDir, "./modules/", `./${key}.ts`));
      indexStr += `// ${groups[key][0].group.name}\n`;
      indexStr += `import ${key} from "./modules/${key}";\n`;
    }
    indexStr += `export default{
      ${Object.keys(groups).map((key) => `...${key}`)}
    }`;

    await wiriteFile(outDir, "/apis.ts", indexStr);
  } else {
    const apisStr = render(apiTemplateStr, {
      apis: apiDataTransformed,
      axiosPath,
    });
    await wiriteFile(outDir, "./apis.ts", apisStr);
  }

  await wiriteFile(outDir, "./interfaces.d.ts", dtsTStr);

  // 是否要转js文件;
  needJS && compileTs(join(outDir, "./apis.ts"));
};

export default async (config: Config | Config[]) => {
  const isMultiple = Array.isArray(config);
  console.log(chalk.yellow("开始生成api..."));
  if (isMultiple) {
    for (const c of config) {
      await genApi(c);
    }
  } else {
    await genApi(config);
  }
  console.log(chalk.green("完成工作,enjoy it!"));
};

/**
 * 转换层,负责将json数据收集整理成方便模板渲染的数据
 */

import { isObject } from "@swagger2apis/utils";

// 入口
export const transform = (rawJSON) => {
  // 我们目前只需要关注两个字段就可以完成所有工作
  // path是接口的核心数据
  // definitions是接口的数据交互载荷类型,我们将使用它来生成ts的接口文件
  const { paths, definitions } = rawJSON;

  return {
    apis: generateApis(paths),
    interfaces: definitions,
    raw: rawJSON,
  };
};

// 生成接口数据
export const generateApis = (paths: Object): any[] => {
  const result: any[] = [];

  Reflect.ownKeys(paths).forEach((path) => {
    const pathData = paths[path];
    result.push(
      ...genApiProps({
        path,
        pathData,
      })
    );
  });

  return result;
};

// 生成api函数名称
const genApiFnName = (path: string, method: string) => {
  return path + method;
};
// 生成api剩余属性
const genApiProps = (data) => {
  const methods = Reflect.ownKeys(data.pathData);
  return methods.map((method) => {
    const methodData = data.pathData[method];
    return {
      apiFnName: genApiFnName(data.path, method as string),
      method: method,
      // 分组
      summary: methodData.summary || "",
      // 描述
      description: methodData.description || "",
      // 载荷类型
      interface: {
        request: resolveParameters(methodData.parameters),
        // response: resolveResponese(),
      },
      raw: data,
    };
  });
};

// 解析参数类型
const resolveParameters = (parameters) => {
  const res: any[] = [];

  parameters.forEach((p) => {
    const parameterRes: any = {
      name: "",
      description: "",
      interfaceName: null,
      required: false,
      // 辅助信息
      helpInfo: {
        // 是否存在路径参数
        hasPathParameter: false,
        // 是否存在body参数
        hasBodyParameter: false,
        // 是否存在query参数
        hasQueryParameter: false,
        // 是否存在表单参数
        hasFormDataParameter: false,
        // 是否存在header参数
        hasHeaderParameter: false,
      },
    };
    // 参数位置 path|query|body|formData|header
    const { in: pos, name: pName = "", required, description, schema } = p;
    parameterRes.name = pName;
    parameterRes.description = description;
    parameterRes.required = required;

    switch (pos) {
      case "path":
        parameterRes.helpInfo.hasPathParameter = true;
        break;
      case "body":
        parameterRes.helpInfo.hasBodyParameter = true;
        const type = schema.type;
        console.log(type);
        if (type === "array") {
          parameterRes.interfaceName = generateTypeName(schema);
        } else {
          parameterRes.interfaceName = generateTypeName(schema);
        }
        break;
      case "query":
        parameterRes.helpInfo.hasQueryParameter = true;
        break;
      case "formData":
        parameterRes.helpInfo.hasFormDataParameter = true;
        break;
      case "header":
        parameterRes.helpInfo.hasHeaderParameter = true;
        break;
      default:
        break;
    }
    res.push(parameterRes);
  });
  // console.log(res);
  return res;
};

// 解析响应数据
const resolveResponese = (responese) => {};

// 生成类型定义数据
const generateTypeName = (key: string | object) => {
  if (isObject) {
  }
  return "I" + key;
};

export const generateDefinitions = (definitions: Object): any[] => {
  return [];
};

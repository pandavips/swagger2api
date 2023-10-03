/**
 * 负责将数据与模板结合完成渲染
 */
import fs from "fs";
import { firstUpperCase, getCurrentDirName } from "@swagger2apis/utils";
import { transform } from "./transform.ts";
import { Eta } from "eta";
import path from "node:path";

const eta = new Eta({ views: path.join(getCurrentDirName(import.meta.url), "./template") });

export const getRenderData = (rawJSON) => {
  const data = transform(rawJSON);
  fs.writeFileSync("./snapshot.json", JSON.stringify(data));
  return data;
};

export const render = (rawJSON: any, template: string): string => {
  const renderData = getRenderData(rawJSON);
  const { apis, interfaces } = renderData;
  renderApis(apis, interfaces);
  // renderInterfaces(interfaces);
  return "";
};

const renderApis = (apis, interfaces) => {
  // 额外的类型定义
  const apisData = apis.map((api) => {
    const { helpInfo } = api;
    const fnName = renderReqFnName(api);
    const description = renderApiDescription(api);
    const paramsInfo = renderParams(api);
    const responseType = renderResponeseType(api);
    const path = renderPath(api);
    const method = renderMethod(api);

    // 找出对应的类型定义
    const apiInterfaces = interfaces.filter((node) => {
      // console.log(node)
      // console.log("responseType", responseType);
      // console.log("node.interfaceName", node.interfaceName);
      if (node.interfaceName === responseType) {
        node.pos = "res =>>";
        return true;
      }
      if (node.interfaceName === paramsInfo.type) {
        node.pos = "req =>>";
        return true;
      }
    });

    console.log(interfaces.find((n) => n.interfaceName === "IAllocationPaymentChannelReq"));

    return {
      helpInfo,
      fnName,
      description,
      paramsInfo,
      responseType,
      path,
      method,
      interfaces: apiInterfaces,
      raw: api,
    };
  });
  const apiRes = eta.render("./apis", { apisData, interfaces });
  fs.writeFileSync("./snapshot_apis.ts", apiRes);
};

// 渲染请求函数方法名
export const renderReqFnName = (api) => {
  const { helpInfo } = api;
  const { hasPathParameter } = helpInfo;
  let path = api.path;
  hasPathParameter && (path = api.path.replaceAll(/[{}]/g, "$"));
  return path.split("/").slice(1).map(firstUpperCase).join("_") + firstUpperCase(api.method);
};

// 渲染api描述
export const renderApiDescription = (api) => {
  return `${api.tags}-${api.description}`;
};

// 渲染请求参数列表
export const renderParams = (api) => {
  const { helpInfo, payloadType } = api;
  const { request } = payloadType;
  const { hasPathParameter, hasBodyParameter, hasQueryParameter, hasFormDataParameter } = helpInfo;

  let type = "any";
  let defaultVal: string = `{}`;
  if (hasBodyParameter) {
    const p = request.find((r) => r.pos === "body");
    type = p.interfaceName;
    defaultVal = "{}";
  } else if (hasPathParameter) {
    type = "string";
    defaultVal = `""`;
  } else if (hasQueryParameter) {
    const p = request.find((r) => r.pos === "query");
    type = p.interfaceName;
    defaultVal = "{}";
  } else if (hasFormDataParameter) {
    const p = request.find((r) => r.pos === "formData");
    type = p.interfaceName;
    defaultVal = "{}";
  }

  const show = hasQueryParameter || hasBodyParameter || hasPathParameter || hasFormDataParameter;

  return { type, show, defaultVal };
};

// 渲染响应值类型
export const renderResponeseType = (api) => {
  const { payloadType } = api;
  const { response } = payloadType;
  if (!response) return null;
  return response.interfaceName;
};

// 渲染请求路径
export const renderPath = (api) => {
  const { helpInfo } = api;
  const { hasPathParameter } = helpInfo;
  let path = api.path;
  hasPathParameter && (path = api.path.replaceAll(/{([^}]*)}/g, "${code}"));
  return path;
};

// 渲染请求方法
function renderMethod(api: any) {
  return api.method.toUpperCase();
}

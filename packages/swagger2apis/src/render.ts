/**
 * 负责将数据与模板结合完成渲染
 */
import { firstUpperCase, pipeAsync } from "@panda/utils";
import { Eta } from "eta";
import { transform } from "./transform";

export const getRenderData = async (rawJSON, ctx) => {
  const data = transform(rawJSON);
  const { plugins } = ctx;
  const { data: dataPatched } = await pipeAsync(plugins.transformed)({ rawJSON, data });
  return dataPatched;
};

export const render = async (rawJSON: any, eta: Eta, ctx): Promise<string> => {
  const renderData = await getRenderData(rawJSON, ctx);
  const { apis, interfaces } = renderData;
  return await renderApis(apis, interfaces, eta, ctx);
};

const renderApis = async (apis, interfaces, eta, ctx) => {
  const apisData = apis.map((api) => {
    const { helpInfo } = api;
    const fnName = renderReqFnName(api);
    const description = renderApiDescription(api);
    const paramsInfo = renderParams(api);
    const responseType = renderResponeseType(api);
    const path = renderPath(api);
    const method = renderMethod(api);

    return {
      helpInfo,
      fnName,
      description,
      paramsInfo,
      responseType,
      path,
      method,
      raw: api
    };
  });
  const { plugins } = ctx;

  const { apisData: apisDataPatched, interfaces: interfacesPatched } = await pipeAsync(plugins.befofeRender)({
    apisData,
    interfaces
  });

  return eta.render("./apis", { apisData: apisDataPatched, interfaces: interfacesPatched });
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

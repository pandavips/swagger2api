/** 在api描述中插入载荷类型描述内容,减少上下翻飞 */
export const ApiTypeInDescription = {
  befofeRender: (raw) => {
    const { apisData, interfaces } = raw;
    apisData.forEach((apiInfo) => {
      // 找出对应的类型定义
      const apiInterfaces = interfaces.filter((node) => {
        if (node.interfaceName === apiInfo.responseType) {
          node.pos = "res =>>";
          return true;
        }
        if (node.interfaceName === apiInfo.paramsInfo.type) {
          node.pos = "req =>>";
          return true;
        }
      });
      // 将类型挂载到api信息上
      apiInfo.interfaces = apiInterfaces;
    });
    return raw;
  }
};

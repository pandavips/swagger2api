// 兼容以前版本的一些插件
import type { IPlugin } from "../plugin";
import { firstUpperCase } from "@pdcode/utils";
import { printErrInfo, printWarnInfo } from "@pdcode/utils";

// 兼容以前版本的请求方法名
export const CompatibleApiFnNameOnOldversionHandle: IPlugin = {
  befofeRender(ctx) {
    printErrInfo(
      "[CompatibleApiFnNameOnOldversionHandle]老版本方法名兼容插件开始工作\n",
      "因为以前的命名方式某些情况下会导致重复key的出现,所以新版采用了新的命名方式来避免,当发现有重复key的出现,后续重复的key将不再执行兼容处理~\n",
      "该插件会尝试尽可能的保留三个版本的方法名:以前版本的byCode和byCode[codename],以及新版本的$[codeName]$\n"
    );
    const { renderData } = ctx;
    const { apis } = renderData;

    // 检测重复key的数据支撑
    const keyMap = new Set<string>();

    ctx.renderData.apis = apis
      .map((api) => {
        const { helpInfo, fnName } = api;
        // 首先去掉下划线
        const newFnName = fnName.replaceAll("_", "");
        // 检查是否有重复的key
        if (keyMap.has(newFnName)) {
          printWarnInfo(`检测到重复方法名[${newFnName}]的出现,原方法名[${fnName}]跳过本次兼容`);
          return api;
        }
        keyMap.add(newFnName);
        api.fnName = newFnName;

        // path参数处理,在以前的版本中出现过两种命名方案 bycode和bycode[codename]
        if (helpInfo.hasPathParameter) {
          // 匹配$xxx$
          const reg = /\$(.*?)\$/;
          const codeName = api.fnName.match(reg)[1];
          const fnName1 = api.fnName.replace(`$${codeName}$`, "ByCode");
          const fnName2 = api.fnName.replace(`$${codeName}$`, "ByCode" + firstUpperCase(codeName));
          return [
            api,
            {
              ...api,
              fnName: fnName1
            },
            {
              ...api,
              fnName: fnName2
            }
          ];
        }
        return api;
      })
      .flat();
    printWarnInfo("[CompatibleApiFnNameOnOldversionHandle]插件处理完成,但无法保证覆盖所有case,若需要可自行实现插件覆盖需求~");
  }
};

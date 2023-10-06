import { IContext } from "../app";
import type { IPlugin } from "../plugin";
import { printSuccInfo } from "@pdcode/utils";

export const createFileHeaderAppendPlugin = (headerString, testFn: (node, ctx: IContext) => boolean = () => true): IPlugin => {
  return {
    // 其实也可以使用beforedWrite钩子来写
    afterRender(ctx) {
      const { renderRes } = ctx;
      renderRes.forEach((node) => {
        if (testFn(node, ctx)) node.content = headerString + node.content;
      });
      printSuccInfo("文件头部追加插件[createFileHeaderAppendPlugin]已经完成文件头部内容的追加~");
    }
  };
};

export const warnInfo = `/* eslint-disable */
// @ts-nocheck
/**
 * 该文件内容由脚本内容生成,如需修改,请修改脚本文件后重新生成
 */
`;

// 警告信息插件
export const FileHeaderAppendWarning: IPlugin = createFileHeaderAppendPlugin(warnInfo);

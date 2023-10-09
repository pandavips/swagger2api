// 擦除url前缀插件

import { IPlugin } from "../plugin";
import { printSuccInfo } from "@pdcode/utils";

export const createPrefixRemovePlugin = (prefix: string): IPlugin => {
  return {
    beforeTransform(ctx) {
      const { rawJSON } = ctx;
      const { paths } = rawJSON;
      const newPaths: any = {};
      Reflect.ownKeys(paths).forEach((path) => {
        newPaths[(path as string).slice(prefix.length)] = paths[path];
      });
      ctx.rawJSON.paths = newPaths;
      printSuccInfo("[createPrefixRemovePlugin]已经完成对url前缀的擦除~");
      return ctx;
    }
  };
};

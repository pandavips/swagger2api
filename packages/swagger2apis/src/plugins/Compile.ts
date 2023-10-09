import { compileTs, writeFile } from "@pdcode/utils";
import { join } from "path";
import prettier from "prettier";
import type { IPlugin } from "../plugin";
import { printInfo, printSuccInfo } from "@pdcode/utils";

export const createCompileTS2JSPlugin = (tsconfig = {}, prettierConfig = {}): IPlugin => {
  const blackExtNameList = ["d.ts"];
  return {
    afterWriteFile: async (ctx) => {
      printInfo("开始编译TypeScript文件~");
      const { writedFileList } = ctx;
      for await (const filePath of writedFileList) {
        if (blackExtNameList.every((extName) => filePath.includes(extName))) continue;
        const res = await compileTs(filePath, tsconfig);
        const content = await prettier.format(res.outputText, {
          parser: "typescript",
          printWidth: 200,
          semi: true,
          singleQuote: false,
          ...prettierConfig
        });
        const filePathNoExtName = filePath.split(".").at(-2);
        // 将编译后的 JavaScript 文件写入磁盘
        writeFile(join(filePathNoExtName!) + `.js`, content);
      }
      printSuccInfo("[createCompileTS2JSPlugin]TypeScript编译插件已经完成对TypeScript文件的编译~");
    }
  };
};

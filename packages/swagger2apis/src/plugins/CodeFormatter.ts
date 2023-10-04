// 对生成文件进行格式化
import prettier from "prettier";

export const CodeFormatter = {
  beforeWriteFile: (content) => {
    return prettier.format(content, {
      parser: "typescript",
      printWidth: 200,
      semi: true,
      singleQuote: false
    });
  }
};

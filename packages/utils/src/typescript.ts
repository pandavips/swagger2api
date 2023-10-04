import fs from "fs";
import { join, sep } from "path";
import ts from "typescript";

// 编译ts到js
export const compileTs = (filePath) => {
  const fileDir = filePath.split(sep).slice(0, -1).join(sep);
  const fileName = filePath.split(sep).slice(-1)[0];
  const fileNameNoExt = fileName.split(".")[0];

  const tsFile = fs.readFileSync(filePath, "utf8");

  // 编译 TypeScript 文件
  const res = ts.transpileModule(tsFile, {
    compilerOptions: {
      target: 9,
      module: ts.ModuleKind.ESNext
    }
  });

  // 将编译后的 JavaScript 文件写入磁盘
  fs.writeFileSync(join(fileDir, `./${fileNameNoExt}.js`), res.outputText, "utf8");
};

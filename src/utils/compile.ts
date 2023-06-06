import ts from "typescript";
import fs from "fs";
import { join } from "path";

// 编译ts到js
export const compileTs = (filePath) => {
  const fileDir = filePath.split("\\").slice(0, -1).join("\\");
  const fileName = filePath.split("\\").slice(-1)[0];
  const fileNameNoExt = fileName.split(".")[0];

  const tsFile = fs.readFileSync(filePath, "utf8");

  // 编译 TypeScript 文件
  const res = ts.transpileModule(tsFile, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
    },
  });

  // 将编译后的 JavaScript 文件写入磁盘
  fs.writeFileSync(
    join(fileDir, `./${fileNameNoExt}.js`),
    res.outputText,
    "utf8"
  );
};

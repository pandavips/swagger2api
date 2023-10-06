import fs from "fs";
import ts from "typescript";

// 编译ts到js
export const compileTs = (filePath, tsconfig) => {
  const tsFile = fs.readFileSync(filePath, "utf8");
  // 编译 TypeScript 文件
  const res = ts.transpileModule(tsFile, {
    compilerOptions: {
      target: 9,
      module: ts.ModuleKind.ESNext,
      ...tsconfig
    }
  });
  return res;
};

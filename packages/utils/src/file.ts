import fs from "fs";

// 将文件写入指定路径
export const writeFile = (path, content) => {
  fs.writeFileSync(path, content, "utf8");
  console.log(123);
};

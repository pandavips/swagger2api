import fs from "fs";
import axios from "axios";

import {
  ApiTypeInDescription,
  FileHeaderAppendWarning,
  create,
  createCodeFormatterPlugin,
  createCompileTS2JSPlugin,
  createApiFileModularRender,
  CompatibleApiFnNameOnOldversionHandle,
  readFileAsString,
  getCurrentDirName
} from "swagger2apis";
import { join } from "path";

// 删除ts文件插件
const DeleteTsFilePlugin = {
  afterWriteFile: async (ctx) => {
    const { writedFileList } = ctx;
    // 过滤出ts文件
    const tsFileList = writedFileList.filter((item) => item.endsWith(".ts") && !item.endsWith(".d.ts"));
    // 然后删除掉
    tsFileList.forEach((file) => {
      fs.unlinkSync(file);
    });
    return ctx;
  }
};

(async () => {
  const prettierConfig = JSON.parse(await readFileAsString(join(getCurrentDirName(import.meta.url), "../../.prettierrc")));
  const res = await axios.get("http://wallet-svc.dev.svc.cluster.local:8080/v2/api-docs?group=app");
  const app = create(res.data);
  app.usePlugin(ApiTypeInDescription);
  app.usePlugin(FileHeaderAppendWarning);
  app.usePlugin(CompatibleApiFnNameOnOldversionHandle);
  app.usePlugin(createCompileTS2JSPlugin({}, prettierConfig));
  app.usePlugin(DeleteTsFilePlugin);
  app.cutstomRender(createApiFileModularRender("modules") as any);
  app.usePlugin(createCodeFormatterPlugin(prettierConfig));
  app.start();
})();

import fs from "node:fs";
import {
  ApiTypeInDescription,
  CompatibleApiFnNameOnOldversionHandle,
  FileHeaderAppendWarning,
  create,
  createApiFileModularRender,
  createCodeFormatterPlugin,
  createCompileTS2JSPlugin,
  createPrefixRemovePlugin
} from "swagger2apis";
import rawJSON from "./api.json" assert { type: "json" };

const prettierConfig = JSON.parse(
  fs.readFileSync("../../.prettierrc", {
    encoding: "utf8"
  })
);
const app = create(rawJSON);

app.usePlugin(createPrefixRemovePlugin("/proxy"));
app.usePlugin(ApiTypeInDescription);
app.usePlugin(CompatibleApiFnNameOnOldversionHandle);
app.usePlugin(FileHeaderAppendWarning);
app.usePlugin(createCodeFormatterPlugin(prettierConfig));
app.usePlugin(createCompileTS2JSPlugin({}, prettierConfig));
app.cutstomRender(createApiFileModularRender("modules"));

app.start();

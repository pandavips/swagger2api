import { join } from "node:path";
import createSwagger2apis, { ApiTypeInDescription, CodeFormatter, getCurrentDirName } from "swagger2apis";
// import rawJSON from "./api.json" assert { type: "json" };

const app = createSwagger2apis({
  rawJSON: "https://petstore.swagger.io/v2/swagger.json",
  outDir: join(getCurrentDirName(import.meta.url), "./snapshot_apis.ts")
});
app.use(ApiTypeInDescription);
app.use(CodeFormatter);
app.run();

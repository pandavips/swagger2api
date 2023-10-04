import { join } from "path";
import createSwagger2apis, { ApiTypeInDescription, CodeFormatter } from "../src/index.js";
import { getCurrentDirName } from "@panda/utils";
import rawJSON from "./api.json" assert { type: "json" };

const app = createSwagger2apis({ rawJSON, outDir: join(getCurrentDirName(import.meta.url), "./snapshot_apis.ts") });
app.use(ApiTypeInDescription);
app.use(CodeFormatter);

app.run();

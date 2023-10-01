import wantedApi, { getCurrentDirName } from "../dist/main.esm.mjs";
import { join } from "path";
wantedApi([
  {
    rawJson: "https://petstore.swagger.io/v2/swagger.json",
    outDir: join(getCurrentDirName(import.meta.url), "./api/a"),
    needJS: true,
  },
]);

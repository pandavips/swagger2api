import { getCurrentDirName, isHttpUrl, pipeAsync, writeFile, isObject } from "@panda/utils";
export { getCurrentDirName } from "@panda/utils";
import axios from "axios";
import { Eta } from "eta";
import path from "node:path";
import { createPlugins } from "./plugin";
import { render } from "./render";
export * from "./plugins/index";

interface ICompileConfig {
  target: "js" | "ts";
}

interface Config {
  // 路径
  rawJSON: any;
  // 输出目录
  outDir?: string;
  // 编译选项
  compile?: ICompileConfig;
  // 模板路径
  templatePath?: string;
}

export const createSwagger2apis = (config: Config) => {
  const plugins = createPlugins({});
  return {
    // 注册插件
    use: (plugin) => {
      if (!isObject(plugin)) throw new Error("请传入一个插件对象");
      Reflect.ownKeys(plugin).forEach((lifeCycle) => plugins[lifeCycle].push(plugin[lifeCycle]));
    },
    run: async () => {
      const { rawJSON, outDir } = config;
      const apiJson = isHttpUrl(rawJSON) ? (await axios.get(rawJSON)).data : rawJSON;
      const { apiJson: apiJsonPatched, config: configPatched } = await pipeAsync(plugins.created)({
        apiJson,
        config
      });

      const eta = new (Eta as any)({
        views: configPatched.templatePath || path.join(getCurrentDirName(import.meta.url), "./template")
      });

      const apiFileContent = await render(apiJsonPatched, eta, { plugins });

      const apiFileContentPatched = await pipeAsync(plugins.beforeWriteFile)(apiFileContent);

      writeFile(outDir, apiFileContentPatched);
    }
  };
};

export default createSwagger2apis;

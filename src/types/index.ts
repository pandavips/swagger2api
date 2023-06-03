export interface Config {
  url: string;
  outDir: string;
  outType: "ts" | "js";
  templatePath: {
    api: string;
    interface: string;
  };
}

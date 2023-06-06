export interface Config {
  // 路径
  url: string;
  // 输出目录
  outDir: string;
  // api公共前缀, 例如: /api,会在输出文件中去掉这部分
  apiUrlPrefix: string;
  // 需要转译成js
  needJS: boolean;
  // 模板路径
  templatePath: {
    api: string;
    interface: string;
  };
}

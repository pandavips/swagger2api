export interface Config {
    rawJson: string;
    outDir: string;
    apiUrlPrefix: string;
    modular: boolean;
    needJS: boolean;
    templatePath: any & {
        api: string;
        dts: string;
    };
    axiosPath: string;
}

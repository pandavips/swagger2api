export interface Config {
    url: string;
    outDir: string;
    apiUrlPrefix: string;
    needGroup: boolean;
    needJS: boolean;
    templatePath: any & {
        api: string;
        dts: string;
    };
    axiosPath: string;
}

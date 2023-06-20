import * as axios from 'axios';

interface Config {
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

declare const jt2Tt: {
    integer: string;
    number: string;
    long: string;
    string: string;
    boolean: string;
    array: string;
    object: string;
    timestamp: string;
};

declare const fetchData: (url: any, data?: {}) => Promise<axios.AxiosResponse<any, any>>;
declare const firstUpperCase: (str: any) => any;
declare const chineseCharacter2pinyin: (character: any) => any;
declare const getCurrentDirName: (importMetaUrl?: string) => string;

declare const compileTs: (filePath: any) => void;

declare const _default: (config: Config | Config[]) => Promise<void>;

export { chineseCharacter2pinyin, compileTs, _default as default, fetchData, firstUpperCase, getCurrentDirName, jt2Tt };

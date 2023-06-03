interface Config {
    url: string;
    outDir: string;
    outType: "ts" | "js";
    templatePath: {
        api: string;
        interface: string;
    };
}

declare const _default: (config: Config | Config[]) => Promise<void>;

export { _default as default };

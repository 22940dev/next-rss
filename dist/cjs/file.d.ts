export declare const loadFile: <T>(path: string, throwError?: boolean) => T | undefined;
export declare const loadDir: <T>(dirPath: string, throwError?: boolean) => T[] | undefined;
export declare const exportFile: (filePath: string, content: string) => void;
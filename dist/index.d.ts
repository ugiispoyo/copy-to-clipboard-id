type ArgsOpt = {
    text?: string;
    id?: string;
    onCopy?: (cb?: string) => void;
};
declare function copy(options?: ArgsOpt): void;
export default copy;

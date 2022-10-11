interface ArgsOpt {
    text?: string;
    id?: string;
    onCopy?: (cb?: string) => void;
}
declare function copy(options?: ArgsOpt): Promise<void>;

export { copy as default };

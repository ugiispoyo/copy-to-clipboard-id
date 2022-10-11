interface ArgsOpt {
    text?: string;
    id?: string;
    onCopy?: (cb?: string) => void;
}
declare function copy(options?: ArgsOpt): void;

export { copy as default };

interface ArgsOpt {
    text?: string;
    id?: string;
    onCopy?: (cb?: string) => void;
}

async function copy(options?: ArgsOpt): Promise<void> {
    let textCopy: string = '';
    if (options?.text) {
        textCopy = options?.text as string;
    } else if (options?.id) {
        const el = document.getElementById(options?.id) as any;
        const nodeName = el?.nodeName;
        switch (nodeName) {
            case "INPUT":
                textCopy = el?.value;
                break;
            case "TEXTAREA":
                textCopy = el?.value;
                break;
            default:
                textCopy = el?.innerText;
        }
    }

    if (options?.onCopy) {
        options?.onCopy(textCopy);
    }

   await window.navigator.clipboard.writeText(textCopy);
}

export default copy;

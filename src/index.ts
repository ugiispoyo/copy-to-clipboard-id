interface ArgsOpt {
    text?: string;
    id?: string;
    onCopy?: (cb?: string) => void;
}

function copy(options?: ArgsOpt): void {
    let textCopy: string = "";
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

    /* With execCommand */
    const tempEl = document.createElement("input") as HTMLInputElement;
    tempEl.setAttribute("type", "text");
    tempEl.setAttribute("value", textCopy);
    document.body.appendChild(tempEl);
    tempEl.select();
    document.execCommand("copy");
    tempEl.remove();

    /* With navigator */
    // window.navigator.clipboard.writeText(textCopy);
}

export default copy;

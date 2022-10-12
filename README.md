# Copy To Clipboard ID

Simple copy function to clipboard

## Installation

```bash
npm i copy-to-clipboard-id
```

**or**

```bash
yarn add copy-to-clipboard-id
```
### With CDN
```javascript
<script src="https://cdn.jsdelivr.net/npm/copy-to-clipboard-id@0.0.6/copy-to-clipboard-id.min.js"></script>
```

###### VanilaJS

```javascript
var copyClipboard = required("copy-to-clipboard-id");

function copy() {
    copyClipboard({ text: "Copy data" });
}
```

##### ReactJS

```javascript
import React from "react";
import copyClipboard from "copy-to-clipboard-id";

export default function App() {
    return (
        <>
            <button onClick={() => copyClipboard({ text: "Copy data" })}>
                Click Copy
            </button>
            <br />
            <input type="text" id="text" value="Copy from value input" />
            <button onClick={() => copyClipboard({ id: "text" })}>
                Click Copy Input
            </button>
            <br />
            <p id="html">copy from html tag</p>
            <button onClick={() => copyClipboard({ id: "html" })}>
                Click Copy Text Html Tag
            </button>
            <button
                onClick={() =>
                    copyClipboard({
                        id: "html",
                        onCopy: (text) => {
                            console.log(text);
                        },
                    })
                }
            >
                Click Copy Text Html Tag With Callback
            </button>
        </>
    );
}
```

##### VueJS
```
<script setup lang="ts">
import copyClipboard from "copy-to-clipboard-id";

function cb(text: string) {
  console.log(text);
}
</script>

<template>
  <button @click="() => copyClipboard({ text: 'Copy data' })">
    Click Copy
  </button>
  <br />
  <input type="text" id="text" value="Copy from value input" />
  <button @click="() => copyClipboard({ id: 'text' })">Click Copy Input</button>
  <br />
  <p id="html">copy from html tag</p>
  <button @click="() => copyClipboard({ id: 'html' })">
    Click Copy Text Html Tag
  </button>
  <button
    @click="
      () =>
        copyClipboard({
          id: 'html',
          onCopy: cb,
        })
    "
  >
    Click Copy Text Html Tag With Callback
  </button>
</template>
```

### API
No | Value | Description
--- | --- | ---
1 | text | The text to be copied
2 | id | the id of the html tag element that will be fetched for copying but if you already use text this will not work
3 | onCopy | callback function

### TypeScript
Add in file index.d.ts or global.d.ts

```javascript
declare module 'copy-to-clipboard-id';
```
### Browser compatibility
![Browser compatibility](https://drive.google.com/uc?export=view&id=12JkQgDvbiMJZByuzrEbJXsSRBfIvS033)
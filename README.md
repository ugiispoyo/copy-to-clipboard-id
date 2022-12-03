
[![npm stat](https://img.shields.io/npm/dm/copy-to-clipboard-id.svg?style=flat-square)](https://npm-stat.com/charts.html?package=copy-to-clipboard-id)
[![npm version](https://img.shields.io/npm/v/copy-to-clipboard-id.svg?style=flat-square)](https://www.npmjs.com/package/copy-to-clipboard-id)
[![](https://data.jsdelivr.com/v1/package/npm/copy-to-clipboard-id/badge)](https://www.jsdelivr.com/package/npm/copy-to-clipboard-id)

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
<script src="https://cdn.jsdelivr.net/npm/copy-to-clipboard-id@0.0.9"></script>
```

###### VanilaJS

```javascript
var copyClipboard = require("copy-to-clipboard-id");

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

### Live Demo React
[Live Demo With Editor](https://stackblitz.com/edit/react-ts-yeygse?file=App.tsx) 
<br/>

[Live Demo](https://react-ts-yeygse.stackblitz.io) 
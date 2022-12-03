import typescript from "@rollup/plugin-typescript";

export default [
    {
        input: "src/index.ts",
        output: {
            dir: "dist",
            exports: "auto",
            format: "cjs",
        },
        plugins: [typescript({ tsconfig: "./tsconfig.json" })],
    },
];

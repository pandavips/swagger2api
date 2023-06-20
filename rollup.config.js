import rollupTypescript from "@rollup/plugin-typescript";
const { terser } = require("rollup-plugin-terser");
import dts from "rollup-plugin-dts";
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
// import nodeResolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy'

export default [
  {
    // 核心选项
    input: "src/index.ts",
    output: [
      {
        file: "dist/main.cjs.js",
        format: "cjs",
      },
      {
        file: "dist/main.esm.mjs",
        format: "esm",
      },
    ],
    plugins: [
      rollupTypescript(),
      commonjs({
        include: /node_modules/,
      }),
      json(),
      terser(),
      // nodeResolve(),
      copy({
        targets: [
          // 拷贝模板文件
          { src: 'src/static/template', dest: 'dist' },
          { src: 'src/static/request', dest: 'dist/request' }
        ]
      }),
      rollupTypescript({ outDir: "dist", declaration: true, declarationDir: "dist", })
    ],
  },
];

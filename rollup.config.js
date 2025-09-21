import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default [
  // Main JS + CSS bundle
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main, // dist/index.cjs.js
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: packageJson.module, // dist/index.esm.js
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      peerDepsExternal(), // Exclude peer dependencies (like react, react-dom)
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      postcss({
        extract: false,
        minimize: true,
      }),
      terser(), // Optional minification
    ],
    external: ['react', 'react-dom'],
  },

  // Type declarations bundle
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types, format: 'es' }],
    plugins: [dts.default()],
    external: [/\.css$/, /\.scss$/, /\.svg$/],
  },
];

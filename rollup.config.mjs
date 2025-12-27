import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy'

export default [
  // JavaScript + JSX bundle
  {
    input: {
      index: 'src/index.ts',
    },
    output: [
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: 'esm/[name].es.js',
        sourcemap: true,
      },
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: 'cjs/[name].cjs.js',
        sourcemap: true,
      },
    ],
    external: ['react', 'react-dom'],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      svgr(),
      postcss(),
      typescript({
        jsx: 'react-jsx', // for React 17+ or Next.js
      tsconfig: './tsconfig.json',
      }),
      copy({
        targets: [
          { src: 'package.json', dest: 'dist/' }
        ]
      }),
    ],
  },

  // Type declarations bundle
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/types/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];


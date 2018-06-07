import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import json from 'rollup-plugin-json';
export default {

  input: './script.old.js',
  output: {
    file : './dist/script.old.js',
    format : 'iife',
    name:'moduleName'
  },
  plugins:[
    json(),
    nodeResolve({
      jsnext : true,
      module: true
    }),
    commonjs(),
  ],
  inlineDynamicImports: true,
  experimentalCodeSplitting: true
};
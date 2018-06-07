import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import json from 'rollup-plugin-json';
export default {

  input: './script.new.js',
  output: {
    file : './dist/script.new.js',
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
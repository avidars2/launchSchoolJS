// let name = __dirname;
//__dirname is only avaialble ins CommonJS modules, not JS/ES modules
let name = 'export-test2.js'
console.log(name);
export function someCommands() {
  console.log(name);

};
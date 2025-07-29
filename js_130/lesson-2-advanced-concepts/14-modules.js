// let {doStuff, myVar: theVar, moduleDetails} = require('./export-test');

// console.log(theVar);

// let thing = new doStuff();
// let details = new moduleDetails();


// thing.printOtherVar();

//THE BELOW won't work as the below converts this file to a JS/ES module which will cause the previous code
//to throw a reference error since the commands above only work for CommonJS modules

import { someCommands } from './export-test2.js';

someCommands();
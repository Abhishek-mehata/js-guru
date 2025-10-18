

// Modules in JS
// Modules are reusable pieces of code that can be exported from one file and imported into another file
// Modules help in organizing code, maintaining code, and reusing code

// There are two types of modules in JS
// 1. CommonJS modules - used in Node.js
// 2. ES6 modules - used in modern JS (ES6 and above)
// In ES6 modules, we use export and import keywords to export and import modules



// It is just a file with .js extension containing code that can be reused in other files

// why?

// organized code: split the main or large program into smaller files.

// reusability: write a code once and use it in multiple files

// maintainability: easier to debug and update because each module focuses on a specific functionality.

// collaboration: this makes collaboration easy


// /--------------------------------------

// index.js
// function greet(username) {
//     return `Good morning ${username}`;
// };


// function print(value) {
//     console.log(value);
// }


// print(greet("Abhishek"));
// print("Welcolme to JS Guru");




// --------------------------------------

// common JS module import and export

// index.js
// function greet(username) {
//     return `Good morning ${username}`;
// };

// function print(value) {
//     console.log(value);
// }

// print(greet("Abhishek"));
// print("Welcolme to JS Guru");





// Creating the utils.js File
// First, create a new file named utils.js where we will define two functions: greet and print.

// // utils.js
// function greet(username) {
//     return `Good morning ${username}`;
// };

// function print(value) {
//     console.log(value);
// }
// // common JS module export
// // Exporting functions from the utils module
// module.exports = {
//     greet,
//     print
// };



// Creating the index.js File
// Now, let’s create index.js, which will import the functions from utils.js and use them.

// index.js
// const allModules = require("./utils.js");
// const {greet, print} = require("./utils.js");

// console.log(allModules)
// output:
// { greet: [Function: greet], print: [Function: print] }

// allModules.print("Welcome to JS Guru");
// const { greet, print } = allModules;
// print(greet("Abhishek"));
// print("Welcome to the world of JS Modules")


// -----
// // index.js
// Destructuring the functions from the utils module
// const {print, greet} = require("./utils.js");
// print(greet("Anything!"));






// -----------------------------------------

// ES6 module import and export
// it is also called dynamic import and export

// ensure you have installed the latest version of node js

// open terminal and run the command
// npm init -y

// it will create a package.json file which will look like this
// {
//   "name": "js-guru",
//   "version": "1.0.0",
//   "main": "demo.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "description": ""
// }

// add the following line in package.json file to enable ES6 modules
// "type": "module",

// now your package.json file will look like this
// {
//   "name": "js-guru",
//   "version": "1.0.0",
//   "type": "module",
//   "main": "demo.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "description": ""
// }

// basically adding "type": "module" in package.json file will enable ES6 modules in your project
// by this we can use import and export keywords in our project


// // utils.js
// function greet(username) {
//     return `Good morning ${username}`;
// };


// function print(value) {
//     console.log(value);
// }

// // this is ES6 default export
// where ever you import this module with any name, it will give you an object by default
// with greet and print function as properties

// export default {
//     greet,
//     print
// };




// // index.js
import modules from "./utils.js";
import modules from "./utils.js"
// modules is an object with greet and print function as properties by default export

modules.print(modules.greet("Abhishek"));
modules.print("Welcome to JS Guru");

const { greet, print } = modules;
// destructuring the object to get greet and print function

print(greet("Rajesh"));
print("Welcome to JS Guru. Again!");



// -------
// import and export without default export

// // utils.js
// utils.js
// function greet(username) {
//     return `Good morning ${username}`;
// };


// function print(value) {
//     console.log(value);
// }

// ES6 module export
// this is also called named export
// export function greet(username) and export function print(value)
// or we can do it at once as below
// by this way we can destructure it in import part in index.js file

// export {
//     greet,
//     print
// };


// named export
// export function greet(username) {
//     return `Good morning ${username}`;
// };

// export function print(value) {
//     console.log(value);
// }



// // index.js
// import { greet, print } from "./utils.js"
// // importing the functions from utils.js file with named export

// print(greet("Rajesh"));
// print("Welcome to JS Guru. Again!");




// -----------------------------------------

// dynamic import and export

// math.js
export const add = (x, y) => x + y;
// export const subtract = (x, y) => x - y;


// index.js
import { greet, print } from "./utils.js"
// importing the functions from utils.js file with named export

// dynamic import
// we can import a module conditionally or on demand using dynamic import
// it returns a promise which resolves to the module object
// it is useful when we want to load a module only when it is needed
let isMathRequired = true;
if (isMathRequired) {
    // dynamic import
    // await import("./math.js");

    const { add } = await import("./math.js")

    console.log("Dynamic Import: 5 + 10 =", add(5, 10));
}

// Note: To run this code, ensure you have Node.js installed and your package.json file includes "type": "module".



// -----------------------------------------


// Benefits of Dynamic Imports



// Improved Performance:



// Load only what is needed, reducing the overall bundle size.



// Especially useful in ReactJS for code-splitting.



// Resource Efficiency:



// Avoid unnecessary module loading for users who don’t require certain features.



// Modular Codebase:



// Simplifies code by separating functionalities into smaller, self-contained modules.



// ReactJS Example



// In a ReactJS application, dynamic imports are used for lazy loading components:



// import React, { Suspense } from 'react';

// const LazyComponent = React.lazy(() => import('./LazyComponent'));



// function App() {

// return (

// <Suspense fallback={<div>Loading...</div>}>

// <LazyComponent />

// </Suspense>

// );

// }



// export default App;



// React.lazy() ensures the component is loaded only when required.



// Suspense displays a fallback UI while the component loads.



// Static Import:

// [Startup Time] --> [Load All Modules] --> [Execution]



// Dynamic Import:

// [Startup Time] --> [Load Essential Modules] --> [Conditionally Load Additional Modules]



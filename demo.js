/**
 * DOM in JS
 * Document Object Model
 *
 */

// browser at first loads the html and then it parse the html
// once the html is parsed and then it creates something called as DOM also called as DOM tree which JS actually understands.

// loads the html ➠➠➠ Parse the html  ➠➠➠ DOM tree
// input        ➠➠➠  Process         ➠➠➠ Output



// DOM tree visualization 
// HTML
// ├── HEAD
// │   ├── META
// │   ├── TITLE
// │   └── LINK
// |
// └── BODY
//     ├── H1
//     |
//     ├── DIV
//     │   ├── P
//     │   ├── BUTTON
//     │   └── A
//     |
//     └── SECTION
//         ├── ARTICLE
//         │   ├── P
//         │   └── SPAN
//      ..................

// using the document keyword in JS we can apply lots of things and functionality in dom tree




/// understanding the flow


// when we open any browser 
// 1. browser loads the html
// 2. once html is loaded , browser parse the html 
// 3. after parsing , it creates DOM tree of the site
// 2. during parsing of html, broswer extracts the css part and loads it into the broser enviroments
// once css is loaded it parse the css
// after parsing the css there is some thing called as css object module is created 
// now with the help of this CSS object module and DOM something called as Render tree is created
// now this render tree is fed to something called VFM (Visual Formatting Model).
// VFM is an algorithm that runs on our browser that places every html elements and css styling at it's required position
// once the vfm runs successfully, we get our final rendered website


// Load HTML -----------> Parse HTML ---------------------------> DOM Tree
//                          |                                         |
//                          |                                         |
//                          |                                         |
//                          |                                         |
//                      Load CSS --------------> Parse CSS            |
//                                                    |               |
//                                                    |               |
//                                                    |               |
//                                                    |               |
//                                                CSS Object Module---|
//                                                                    |
//                                                                    |
//                                                                    |
//                                                                    |
// Final Website Rendering <------------   VFM <-------- Render Tree<---






/**------------------------------------------------------------------------------------------------------------ */

 
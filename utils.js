// utils.js
function greet(username) {
    return `Good morning ${username}`;
};


function print(value) {
    console.log(value);
}

// ES6 module export
// this is also called named export
// export function greet(username) and export function print(value)
// or we can do it at once as below
// by this way we can destructure it in import part in index.js file

export {
    greet,
    print
};



// named export
// export function greet(username) {
//     return `Good morning ${username}`;
// };

// export function print(value) {
//     console.log(value);
// }
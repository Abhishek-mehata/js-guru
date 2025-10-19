// // // promise chaining
// // Promise chaining allows you to execute a series of asynchronous operations in sequence.
// // // Promise chaining means calling multiple .then() handlers one after another,
// // //  where the result of one .then() is passed to the next.


// // new Promise((resolve, reject) => {
// //     setTimeout(() => resolve(10), 1000);
// // })
// //     .then((num) => {
// //         console.log("1.Got:", num);
// //         return num * 2; // passes 20 to next then
// //     })
// //     .then((num) => {
// //         console.log("2.Got:", num);
// //         return num * 3; // passes 60 to next then
// //     })
// //     .then((num) => {
// //         console.log("3.Got:", num);
// //     });


// // // Each .then() returns a new promise, which allows the next .then() to wait for the previous one.





// function fetchUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve({ id: 1, name: "Abhishek" }), 1000);
//     });
// }

// function fetchPosts(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(["Post 1", "Post 2"]), 1000);
//     });
// }

// fetchUser()
//     .then((user) => {
//         console.log("User:", user);
//         return fetchPosts(user.id); // returns another promise
//     })
//     .then((posts) => {
//         console.log("Posts:", posts);
//     })
//     .catch((err) => {
//         console.error("Error:", err);
//     });
// // fetchUser() resolves → gives user info
// // That result goes to next .then()
// // fetchPosts() runs → returns new promise
// // Next .then() handles posts
// // .catch() handles any error in the chain






// // ----------------

// function task(message, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(message);
//             resolve();
//         }, delay);
//     });
// }

// // Chaining promises
// task('Task 1 completed', 1000)
//     .then(() => task('Task 2 completed', 2000))
//     .then(() => task('Task 3 completed', 1000));





// ----------------------------------------------------------------------------------------------------------------------------------------
// Promise APIs


// Promise.all([arrayOfPromises])



// ----------------------------------------------------------------------------------------------------------------------------------------
// Promise APIs

// We will cover Promise.all() ,Promise.allSettled(), Promise.race() v/s Promise.any() 


// promise.all()
// Promise.all([arrayOfPromises])
// Consider a scenario where we have to execute multiple promises in parallel and wait until all of them are ready.





// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 resolved");
//     }, 3000);
// });


// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("promise 2 resolved")
//     }, 2000);
// });

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 3 resolved")
//     }, 1000);
// });


// // In general we do something like this
// promise1.then(res => console.log(res))
// promise2.then(res => console.log(res))
// promise3.then(res => console.log(res))



// // via promise.all() we do something like this

// let arrOfPromises = [promise1, promise2, promise3];

// let promise = Promise.all(arrOfPromises);
// // console.log(promise)
// promise.then(res => console.log(res))















// let promise1 = new Promise((res, rej) => setTimeout(() => res("Promise 1 resolved"), 3000));
// let promise2 = new Promise((res, rej) => setTimeout(() => rej("Promise 2 rejected"), 2000));
// let promise3 = new Promise((res, rej) => setTimeout(() => res("Promise 3 resolved"), 1000));

// let arrOfPromises = [promise1, promise2, promise3];

// let promise = Promise.all(arrOfPromises);

// promise
//     .then(res => console.log(res))
//     .catch(error => console.log(error));
// Output:
// Promise 3 rejected

// Promise.all() waits for all promises to resolve.
// But since promise2 rejects after 2 seconds, the whole Promise.all() immediately rejects with that error.











// let promise1 = new Promise((res, rej) => setTimeout(() => res("Promise 1 resolved"), 3000));
// let promise2 = new Promise((res, rej) => setTimeout(() => rej("Promise 2 rejected"), 2000));
// let promise3 = new Promise((res, rej) => setTimeout(() => rej("Promise 3 rejected"), 1000));

// let arrOfPromises = [promise1, promise2, promise3];

// let promise = Promise.all(arrOfPromises);

// promise
//     .then(res => console.log(res))
//     .catch(error => console.log(error));


// lets see a practical example of this

// let users = ["Abhishek-mehata", "aman-mehta7", "abhi"]

// // let promise1 = fetch("https://api.github.com/users/abhishek-mehata");
// // let promise2 = fetch("https://api.github.com/users/abhishek-mehata");
// // let promise3 = fetch("https://api.github.com/users/aman-mehta7");


// let arrOfPromises = users.map(user => fetch("https://api.github.com/users/" + user))

// // console.log(arrOfPromises)
// let promise = Promise.all(arrOfPromises);
// // console.log(promise)

// promise.then(resposne => {
//     resposne.forEach(data => {
//         console.log(data.url)
//     })
// }).catch((err) => {
//     console.log(err)
// })




// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Promise.allSettled()

//  the problem with promise.all() is that if any one promise is rejected then it all the array of promsie as whole

// promise.allSetelled() is here to overcome this isssue

// a promise is called settled if it  rejected or fullfilled 


// Eg:
// let promise1 = new Promise((reslove, rejec) => {
//     setTimeout(() => reslove("Promise 1 resolved"), 3000);
// });

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 2 resolved"), 2000);
// });

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("promise 3 resolved"), 1000);
// });


// let arrayOfPromises = [promise1, promise2, promise3];

// let promise = Promise.allSettled(arrayOfPromises);

// // console.log(promise)
// // promise.then(response => {
// //     console.log(response )
// // })


// promise.then(response => {
//     // console.log(response )
//     response.forEach(data => {
//         console.log(data)
//     })
// })




// let's see the practical example of this
// let users = ["Abhishek-mehata", "aman-mehta7", "abhi"]

// let arrOfPromises = users.map(user => fetch("https://api.github.com/users/" + user))


// let promise = Promise.allSettled(arrOfPromises);


// promise.then(resposne => {
//     resposne.forEach(data => {

//         console.log(data)
//     })
// }).catch((err) => {
//     console.log(err)
// })




// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Promise.race()
// gives us fastest setelled promise(either resolved or rejected);

// let promise1 = new Promise((reslove, rejec) => {
//     setTimeout(() => reslove("Promise 1 resolved"), 3000);
// });

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 2 resolved"), 2000);
// });

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("promise 3 rejected"), 1000);
// });


// let arrayOfPromises = [promise1, promise2, promise3];

// let promise = Promise.race(arrayOfPromises)

// promise.then(response => {
//     console.log(response);
// }).catch(err => {
//     console.log(err);
// })



// promise.any()
// gives us the fastest resolved promise from array of promises
// let promiseAny = Promise.any(arrayOfPromises);

// promiseAny.then(response => {
//     console.log(response);
// }).catch(err => {
//     console.log(err);
// })


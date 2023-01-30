let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
        // reject("Error");
    }, 1000);
});

let p2= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 2000);
});

let p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject("This promise gave an error");
        // resolve(3);
    }, 3000);
})

//promise.all() waits for all promises to resolve/reject and returns an array of their results. If either one fails then it will give error or will go to catch block

//all the promises in total took 3seconds to resolve, p1 in 1 simulated second, p2 in 2 simulated seconds and p3 in 3 simulated seconds
// Promise.all([p1, p2, p3]).then((values) => {
//     console.log(values);
// }).catch((error) => {
//     console.log(error);
// });

//if we want that even if one or more fails, we want to get the results of the promises that resolved, we can use promise.allSettled()

// Promise.allSettled([p1, p2, p3]).then((values) => {
//     console.log(values);
// }).catch((error) => {
//     console.log(error);
// });

/*
will print this:

[
  { status: 'fulfilled', value: 1 },
  { status: 'fulfilled', value: 2 },
  { status: 'rejected', reason: 'Error' }
]

or if all promises resolve:
[
  { status: 'fulfilled', value: 1 },
  { status: 'fulfilled', value: 2 },
  { status: 'fulfilled', value: 3 }
]
*/

//Promise.race() waits for the first promise[jiska settimeout kam hai, na ki vo jo pehle likhi hai] to resolve/reject and returns its result. Its result will become the output

// Promise.race([p1, p2, p3]).then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// });


/*
If first has error no matter what the other two do, it will go to catch block
o/p: Error
If first didn't have error,then it will print:
1
no matter what the other two do
*/

//Promise.any() gives the first promise that resolves, if all fail then it will give error.

// Promise.any([p1, p2, p3]).then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// });

//Promise.resolve() returns a resolved promise

// Promise.resolve(1).then((value) => {
//     console.log("Promise resolved with value: " + value);
// })

// //Promise.reject() returns a rejected promise
// Promise.reject("Error").catch((error) => {
//     console.log("Promise rejected with error: " + error);
// })

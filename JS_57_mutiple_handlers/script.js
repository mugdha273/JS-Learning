let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    resolve(true);
  },2000);
});

p1.then((value) => {
  console.log(value);
}).then(() => {
  console.log("Promise is resolved");
})
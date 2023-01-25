//promises- solution to callback hell. A promise is a "promise of code execution". The code either executes or fails. In both the cases the subscriber will be notified. used to execute things parallelly.

/*
syntax:
let promise = new Promise(function(resolve, reject){
    //code
    if(success){
        resolve();
    }else{
        reject();
    }
})
*/

let p1 = new Promise(function(resolve, reject){
    console.log("Promise is pending");
    setTimeout(function(){
        resolve(true)
    }, 2000);
});

let p2 = new Promise(function(resolve, reject){
    console.log("Promise is pending");
    setTimeout(function(){
        reject(new Error("promise is rejected"))
    }, 2000);
});

//to get the value
p1.then((value)=>{
 console.log(value);
})

//to get the error
// p2.catch((error)=>{
//     console.log("error occured");
// })

//or you can write try catch together

p2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log("error occured");
})



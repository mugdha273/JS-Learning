// console.log("Start");
// setTimeout(function() {
//   console.log("Timeout");
// }, 3000);
// console.log("End");

/*as it is asynchronous, it will print the following start End then Timeout. This is because the setTimeout function is not blocking the execution of the code. It is executed in the background and when the time is up, it will execute the callback function. */

/* callback functions are functions that are passed as arguments to other functions. They are executed after the parent function has finished executing.
*/
function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src
    script.onload = function(){
        console.log("Script loaded");
        callback(null,src);
    }
    script.onerror = function(){
        console.log("Script not loaded");
        if(error){
            console.log(error);
        }
        callback(new Error("Script not loaded"));
    }
    document.body.appendChild(script);
}

function hello(error, src){
    console.log("Hello" + src);
}

loadScript("https://cdn.jddsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello);

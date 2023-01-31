//try catch finally
// try{ // try to execute the code
//     console.log(unknownVariable);
// }
// catch(error){ // catch the error and print it
//     console.log(error);
// }
// finally{    // irrespective of the error, this block will be executed
//     console.log("Finally block");
// }

//error object & custom error 61 tut

try{
    // throw new Error("Custom error");
    console.log(unknownVariable);
    throw new ReferenceError("Custom error");
}
catch(error){
    // console.log(error.name);
    // console.log(error.message);
    console.log(error);
    //with finally you can exit the loop, close the file, write the log file
}
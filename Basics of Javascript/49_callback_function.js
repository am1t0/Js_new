// CALLBACK FUNCTIONS

function myFunc2(){
    console.log("Inside my func 2")
}

function myFunc(callback){
    callback();
    console.log("Inside my myFunc")
}

myFunc(myFunc2);
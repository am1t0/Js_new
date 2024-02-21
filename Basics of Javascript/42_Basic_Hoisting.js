// HOISTING ---> memory allocation(declaration) before execution

// function declaration are hoisted not expression or arrow functions
/*
greet()
function greet(){ 
    const a = 33;
    console.log("Good Morning",a)
}
*/

// variables declared with var are also hoisted 

console.log(roll)

var roll = "22I2115"          // only declaration are hoisted not initialization
// creating const ARRAY

// for non-primitives the const means the reference constant 
// it does not mean that value cannot be changed, just that we can't reassign a new array to this variable. We can still change

const arr = ["milk","curd","butter","ghee"];

console.log(arr);

arr.push("cheese");

console.log(arr);
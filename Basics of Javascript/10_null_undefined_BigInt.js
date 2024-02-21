
//****  undefined ---- Undefined means a variable has been declared but has yet not been assigned a value.

let name;

console.log(name)

//***   null --- Null is an assignment value. It can be assigned to a variable as a representation of no value. 

let age = null;

console.log(age)


// ----------------- INTERESTING FACT-------------------------

console.log(typeof null) 
// It will give "object" this is a bug / error 


//*****  BigInt
let num = BigInt(7389547594850948594859485094);

let numb = 838949340n;          // this is also BigInt

console.log(num)

console.log(numb)

// you can do operation between bigints only , cannot mix

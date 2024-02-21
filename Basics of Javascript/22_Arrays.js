// -----------ARRAYS-------------

let arr = ["amit",21,undefined,null]

let brr = ["mango","guava","orange"]

console.log(brr)

brr[1] = "banana"

const obj = {} 

console.log(brr)

console.log(arr)

console.log(typeof arr)     // It is of type object but the object literals are also of object type

// so for differentiating between arrays and object literals , We can use 

console.log(Array.isArray(arr))
console.log(Array.isArray(obj))
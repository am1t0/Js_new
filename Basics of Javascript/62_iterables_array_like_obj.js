// iterables
// on which we can use for of loop
// string, array are iterable

const str = "AmitisGreate@gmail.com";

for(let x of str){console.log(x)}

// objects are not iterable 


// array like objects 
// have length property 
// elements of it are accessible with the indexes
//ex:- string

const firstName = "amit"
console.log(firstName.length)
console.log(firstName[2])
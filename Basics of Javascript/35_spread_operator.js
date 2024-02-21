// IN ARRAY
/*
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr = [...arr1,...arr2]

console.log(arr)

const str = [..."123456789"]

console.log(str);
*/

// IN OBJECTS

const obj1 = {
     key1 : "value1",
     key2 : "value2"
}
const obj2 = {
    key1 : "valueUnique",
    key2 : "value3",
    key3 : "value4",
}

// const newObj = {...obj1,...obj2,key32:"value32"}

 const newObj = {..."abcd"}

console.log(newObj)

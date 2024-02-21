// difference between dot and bracket notation

const person={
    name:"Amit",
    age:22,
    "person hobbies":["guitar","sleeping","listening"]
}

// console.log(person.person hobbies) --------- this line will generate error

console.log(person["person hobbies"])

let key = "email"

person[key] = "amit@gmail.com";


console.log(person)


// 4:10:51
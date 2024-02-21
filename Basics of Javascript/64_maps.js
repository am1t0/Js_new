// maps are iterable
// stores value in key value pair
// stores in ordered form
// duplicate keys not allowed

// ----- OBJECTS ------
// object literal
// key -> string
// key -> symbol
// const person = {
//      name : "Amit",
//      age : 23,
//      1 : "one"
// }
/*console.log(person.name)

console.log(person["name"])

console.log(person[1]); */

// -------- MAP-----------

const person = new Map();

person.set("name","Amit")          // bigggggggest difference in obj literal and map -> here key can be of any datatype 
person.set("age",21)
person.set(122, "Ice-cream")

// console.log(person)
// console.log(person.get(122))

for(let x of person.keys()){
    // console.log(x,typeof x);
    console.log(person.get(x));
}

// applying for of loop directly
for(let x of person){
    console.log(Array.isArray(x))        // ----->  returns array of containing key and value
}

// for of by destructuring 
for(let [key,value] of person){
    console.log(key," ----> ",value)
}


// another way of creating map
const mp = new Map([['banana',40],['orange',90],['guava',50]])

console.log(mp);
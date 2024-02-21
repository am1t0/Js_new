// PARAMETER DESTRUCTURING

const person = {
      name : "Amit",
      age  : 22,
      role : "Developer"
}

/*
let myIntro =(person)=>{
    console.log(person.name);
    console.log(person.age);
    console.log(person.role);
}
*/

let myIntro =({name,age,role})=>{
    console.log(name);
    console.log(age);
    console.log(role);
}
myIntro(person)
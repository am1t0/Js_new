// MAP ---- similar to forEach but returns new Array

const numbers = [4,3,5,8]

function square(value){
    //  console.log(value*value); ----- not returns thus new array using map will contains undefined
        return value*value;
}

const sqaureNumbers = numbers.map(square);

console.log(numbers);

console.log(sqaureNumbers);

// PRACTICAL USE 

const member = [
    {name: "Amit", age: 21, role: "Developer"},
    {name: "Prayas", age: 24, role: "Manager"},
    {name: "Raman", age: 21, role: "Tester"}
]

const roles = member.map((members)=>{
     return members.role;
})

console.log(roles);
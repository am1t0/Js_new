
const person1 = {
    id : 1,
    name : "Amit"
}

const mp = new Map();

mp.set(person1,{age:21,salary:"22k"})

console.log(mp.get(person1).age);

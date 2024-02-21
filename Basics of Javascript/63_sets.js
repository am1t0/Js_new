// Sets (it is iterable)
// store data
// No indexed-accessing
// order is not guaranteed
// unique items only (no duplicates allowed)

const numbers = new Set()
numbers.add(2);
numbers.add(-1);
numbers.add("Ok");
numbers.add([4,6,2]);  
numbers.add([4,6,2]); // it will be added becoz it has different address
console.log(numbers)

if(numbers.has(2)) console.log("2 is present")

for(let x of numbers) console.log(x)


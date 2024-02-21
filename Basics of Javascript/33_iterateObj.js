// -----------LOOPING OBJECT------------
const obj = {
    name:"Amit",
    age:22,
    city:"Indore",
    role:"Developer",
    "tech stack":["Java,Node js,Js,HTML,CSS,express Js"]
}
// 1. for in loop 

for(let x in obj){
    console.log(`${x} : ${obj[x]}`);
}

// 2. Object.keys() ------- returns the array of keys

for(let key of Object.keys(obj)){
    console.log(key," : ",obj[key]);
}





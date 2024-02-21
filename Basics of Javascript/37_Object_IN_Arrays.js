// OBJECT inside ARRAYS
// real world application

const users = [
    {userId : "22I3", age : 22},
    {userId : "22I4", age : 20},
    {userId : "22I5", age : 24}
]
console.log(users)

for(let x of users){
    console.log(x.userId);
}
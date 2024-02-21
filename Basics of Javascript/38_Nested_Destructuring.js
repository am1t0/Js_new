// NESTED DESTRUCTURING

const users = [
    {userId : "22I3", age : 22, gender : "Male"},
    {userId : "22I4", age : 20, gender : "Male"},
    {userId : "22I5", age : 24, gender : "Male"}
]

const [{age,gender}, ,{userId}] = users;

console.log(age,gender,userId)
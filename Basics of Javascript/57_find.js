// FIND method--------------> first element with that property return hogi

const arr = ["Amit","Amangoe","Django"]

const ans = arr.find((name)=>{
     return (name.length == 6);
})

console.log(ans)

// PRACTICAL USE 

const users = [
  {id: 1, name : "Amit"},
  {id: 2, name : "Devraj"},
  {id: 3, name : "Jay"},
  {id: 4, name : "Shweta"},
  {id: 5, name : "Anny"},
  {id: 6, name : "Akash"}
]
const user = users.find((user)=>{
    return (user.id==4);
})
console.log(user)

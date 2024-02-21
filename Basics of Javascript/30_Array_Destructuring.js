// DESTRUCTURING OF ARRAY - unpacking values in different variables

let arr = ["eat","code","sleep","repeat"]

let [a,b,...c] = arr;          // -------------- a,b,c will be like normal variables whose redecaration and re-initailization depends on let,const,var
 
a="ok"

console.log(arr)


console.log(a,b,c)
//-----------Array CLONNING-------------

let arr = ["milk","curd","butter"];


/*let brr = arr;

 brr.push("cheese");       -------- since the reference is same then the change in one will be reflected in other 

console.log(arr,brr);
*/

      // WAYS 
/*
   1. SLICE METHOD
   let brr = arr.slice(0)    and   brr = arr.slice(0).concat(["items1,item2..n"])
   
   2. SPREAD OPERATOR
   let crr = [...arr]        and  crr = [...arr,"ok","good"]  or  crr = [...arr,...brr]

console.log(arr===crr)
*/

let brr = [2,3];

let  crr = [...arr,...brr];

console.log(crr);
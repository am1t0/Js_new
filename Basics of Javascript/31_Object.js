//------------OBJECT------------//

/* 1. object non-primitive datatypes

   2. for real world data

   3. stores in key value pair

*/

const obj = {
   name:"amit",
   age:22,
   city:"Indore",
   3:"favorite number"
}
console.log(obj)

console.log(obj.age)          // ------------> accessing normal variables  "obj.key" or obj["key"];

console.log(obj[3])           // -------------> for number key "obj[key]"


//-----------ADDING NEW KEY VALUE PAIR IN OBJECT-----------

obj.gender="male";
obj.rank = 1;

console.log(obj)
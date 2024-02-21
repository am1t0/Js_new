// SPLICE method ---> delete or insert something in array

const myArr = ["Item1","Item2","Item3"];

// delete
/*
const deleteItemArr = myArr.splice(1,1); -----> start kaha se then delete kitne krne hai --------> returns the array of deleted items
console.log(myArr)
*/

// insert 
myArr.splice(0,0,"InsertedItem"); // -------> kaha se start , kitne delete , kya add krna hai

console.log(myArr)
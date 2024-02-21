
// BLOCK SCOPE vs FUNCTION SCOPE

// let and const are block scope
// var has function scope

{
    let name = "Amit";
    console.log(name)
}
// console.log(name)

{
    var name = "Mohit";
}
console.log(name);

function fun(){
    var food = "pizza"
    console.log(food);
}
fun()
// console.log(food) -------------> generate error any variable inside function is accessible within it only
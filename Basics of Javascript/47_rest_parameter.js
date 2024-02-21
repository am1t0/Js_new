
function addAll(...num){
    let sum = 0;
    for(let x of num){
        sum += x;
    }
    return sum;
}

console.log(addAll(3,4,5,6,1))
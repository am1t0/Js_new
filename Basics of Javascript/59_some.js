// SOME method -------> if any of the element satisfies the condition then true

const numbers = [2,4,6,8,9,10,22];

const ans = numbers.some((num)=> num%11==0)

console.log(ans)
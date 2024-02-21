// REDUCE ----> reduces array to single value

const numbers = [1,2,3,4,5]

const sum = numbers.reduce((accumulator,currvalue)=>{
  console.log(accumulator,currvalue)  //crrvalue start always from second element && accumulator each time holds the returned value if not passed any argument
  return accumulator+currvalue;
})

console.log(sum);

// PRACTICAL EXAMPLE 

const userCart = [
    {productId:1,productName: "Mobile", price: 12000},
    {productId:2,productName: "Laptop", price: 32000},
    {productId:3,productName: "Neckband", price: 1000}
]

const totalAmt = userCart.reduce((total,curramt)=>{
         return total+curramt.price;   
},0) // passing the default value for accumulator(total)

console.log("Your total amount is "+totalAmt);
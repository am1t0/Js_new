//  EVERY method

const numbers = [2,4,6,8,9,10];

const ans = numbers.every((num)=> (num%2==0));

// callback function ----> true/false

// every method ----> true/false

console.log(ans);

// PRACTICAL USE CASE

const userCart = [
    {productId:1,productName: "Mobile", price: 12000},
    {productId:2,productName: "Laptop", price: 23000},
    {productId:3,productName: "Neckband", price: 1000}
]

// check whether every product has price < 30000

const res = userCart.every((product)=>product.price < 30000)

console.log(res);
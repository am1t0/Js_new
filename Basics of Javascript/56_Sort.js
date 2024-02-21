// SORT METHOD ----------- modifies the array and sort alphabetically 

const arr = [5,9,1200,410,3000];   

// arr.sort();  // It will take arr = ["5","9","1200","410","3000"] each in string form and then checks the ASCII value from first for comparison
      // first char ASCII values = [53 , 57 ,  49 ,  52,    51]    
      
  arr.sort((a,b)=>{
    return a-b; 
  })     
  // 1200 410 
  // 1200-410 ---> positive----> b a

  // 5 9
  // 5-9 ---> negative -----> a b

console.log(arr);


const users = ["Amit","Aman","Jerry","Cate"]

users.sort()

console.log(users);

// PRACTICAL USE CASE 

const products = [
    {productId:1 , name: "p1", price:12000},
    {productId:2 , name: "p2", price:300},
    {productId:3 , name: "p3", price:1100},
    {productId:4 , name: "p4", price:20},
    {productId:5 , name: "p5", price:200},
    {productId:6 , name: "p6", price:710}
]
// lowtoHigh filter

products.slice(0).sort((a,b)=>{
    return a.price-b.price;
})

console.log(products);
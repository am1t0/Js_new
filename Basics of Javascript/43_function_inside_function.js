
const app =()=>{
    console.log("Inside app function")
    const myFunc=()=> console.log("myFunc function")
    const sum=(num1,num2)=> num1+num2;
    const prod = (num1,num2)=> num1*num2;

    myFunc();
}

app();

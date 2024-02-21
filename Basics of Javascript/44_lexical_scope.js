// LEXICAL SCOPE 

const myVar = "value1";

function myApp(){
    // const myVar = "value1";
    function myFunc(){
            // const myVar = "value33";
            console.log("Inside myFunc",myVar);
        }
        const func2 =()=>{}
        console.log(myVar);
        myFunc();
    }

    myApp();

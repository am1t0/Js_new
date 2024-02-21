
const numbers = [4,3,5,8]

function multiplyByTwo(value,index){              // PARAMETERS: first-value , second-index, third-array
    console.log(index," -------> ",value*2,)
}

numbers.forEach(multiplyByTwo);
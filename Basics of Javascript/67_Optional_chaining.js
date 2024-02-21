// OPTIONAL CHAINING

const user = {
    name : "Amit",
    address : {HouseNO : 123 , area : "badiyakima,INdore"}
}

// console.log(user.address.HouseNO) ----------> this will generate error as not present 

// safe khelne ke liye ?. operator 

const HouseNumb = user?.address?.HouseNO;       // ?. check krega first ki wo iske pehle jo likha hai wo exist kr rha hai ki ni

console.log(HouseNumb);
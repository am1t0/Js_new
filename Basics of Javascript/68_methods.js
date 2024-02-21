// METHODS --------> function inside object literals

const employee = {
    name : 'John',
    age  : 34,
    work : function(){
        console.log(`${this.name} is a senior Developer at G👀gle`)
    },
    income : "123k",
}

employee.work()

// 8 : 44 : 15
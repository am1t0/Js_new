// ---------AND OR NOT LOGICAL OPERATOR-------------

let name = "Amit";
let age = 21

if(age>18 && name[0]=='A'){        // ------------------------all condition must be true for overall true
    console.log("He is the master of World!")
}
else {
    console.log("\nHe is in the process of becoming great!\n");
}

if(age>18 || name[0]=='A'){           // ------------------------ only one condition require to be true
    console.log("He is the master of World!")
}
else {
    console.log("\nHe is in the process of becoming great!\n");
}
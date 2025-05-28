//Global scope
const globarVar = "Testing global variable";

function callGlobalVar(){
    console.log(globarVar);
}

//local scope
/* function callLocalVar(){
    const localVar="Testing local variable";
    console.log(localVar);
    console.log(globarVar);
}

//block scope - use Const and let type for Block scope. Var is not block scoped
if(true){
    const blockVar=20;
    console.log("Block variable is: ", blockVar);
    //console.log(localVar); // This will give an error since localVar is not accessible here
    
}  */
//console.log(blockVar); // This will give an error since blockVar is not accessible here


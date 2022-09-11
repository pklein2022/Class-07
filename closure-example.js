//**Closure **
//When a function remembers it's outer variables

let x = 0;  //in the outer or global scope

function logToConsole(){
    console.log(x)  
}
x = 10;  //this is also in the outer scope
logToConsole();
function redundantReturn(str){
    return function(){
        return str;
    }
}
redundantReturn("Hello")()
// Hello
let newFunction = redundantReturn("Hello")
undefined
newFunction()
'Hello'
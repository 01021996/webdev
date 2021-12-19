// function multiply(){
//     console.log('hi')
// }

// multiply()

// function add(a,b)
// {
//     console.log(a+b)
// }

// add(2,4)

// functions as FIRST CLASS CITIZENS-variables can be treated as functions
let sayHi=function()    //ANONYMOUS FUNCTION
{
    console.log('hi kaise ho');
}

sayHi()

//IIFE- Immediately invoked function expression-used for automation
let add=(function(a,b){
    return a+b
})(10,20)

console.log(add)

//Arrow Functions
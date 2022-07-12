/*
normal way of writing function is as 

function sum(){
    let a = 10,b=5;
    return a+b;
}
console.log(sum());

*/

//convertinf normal funtion to fat arrow function

let sum = () => {
    let a = 5,b=6;
    return a+b;
}
console.log(sum());

/*
NOTE
* function should be called below after defining function
*In fat arrow function if statement is only one line then no need to used returned keyword
eg. 
const sum = () = =>`sum = ${(a=5)+(b=6)}`;
*we cannot use "this" in fat arrow function

*/
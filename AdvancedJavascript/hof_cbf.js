// <!-- Higher order function:
//     function which takes another function as an argument s called higher order function.

// call back function:
//     a call back function is the one which is passed as argument to another function to be called back

// for eg we will create calculator now. -->

const add=(a,b) =>{
    return a+b;
}

const sub=(a,b) =>{
    return a-b;
}
const mul=(a,b)=> {
    return a*b;
}

const div=(a,b) =>{
    return a/b;
}

const calculator=(a,b,operator)=>{
   return operator(a,b);
}

console.log(calculator(23,10,add));
console.log(calculator(230,10,div));
console.log(calculator(3,33,mul));
/*
calculator is higher order function which accepts three argument ,
the third one is bieng callback.

here calculator is called higher order function because it takes
 anotherfunction as an argument

add,sub&mul are called callback function because the are passed as 
an argumnet to another function
*/
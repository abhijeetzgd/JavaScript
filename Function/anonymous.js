//one can defined a named function or anonymous function
//same as function exprssion

var funexp = function(a,b){     // as here we didnt mention name of function here
    return a+b; 
}

// console.log('Total = '+funexp());

var sum = funexp(23,45);
console.log(`sum = ${sum}`);

sum = funexp(23,450);
console.log(`sum = ${sum}`);
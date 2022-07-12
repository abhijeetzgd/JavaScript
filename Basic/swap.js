//using third variable
// var a=10,b=20;

// console.log('a = '+a);
// console.log('b = '+b);

// var t = a;
// a = b;
// b = t;

// console.log('a = '+a);
// console.log('b = '+b);

//without using third variable

var a=10,b=20;

console.log('a = '+a);
console.log('b = '+b);

a = a+b;
b = a-b;
a = a-b;

console.log('a = '+a);
console.log('b = '+b);

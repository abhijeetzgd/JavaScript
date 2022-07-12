/*
*substr(start,end):
    -The substr is similar to slice().
    -the difference is that second parameter specifies the length of the extractedd.
*/

let str = 'Apple,Banana,Chole,Bhature,Chicken,Tanduri';
let res = str.substr(0,4)
console.log(res)
res = str.substr(7,-2) ///nothing will get printed
console.log(res)
res = str.substr(-7,-2) //nothing will get printed
console.log(res)

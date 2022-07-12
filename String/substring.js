/*
*subString(start,end):
    -The subString is similar to slice().
    -the difference is that subString() can not accept negative indexes.
    -if we give -ve value then character are counted from 0th pos. 
*/

let str = 'Apple,Banana,Chole,Bhature,Chicken,Tanduri';
let res = str.substring(0,4)
console.log(res)
res = str.substring(7,-2) //from 0 to 7 get printed
console.log(res)
res = str.substring(-7,-2) //nothing will get printed
console.log(res)

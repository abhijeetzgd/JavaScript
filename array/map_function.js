/*
**map()**
    * returns a new array conatining the result of calling function on every element in array
*/

var arr = [81,64,49,9,625]

var sqArr = arr.map((i)=>{
    return i**0.5;
})

console.log(arr)
console.log(sqArr)

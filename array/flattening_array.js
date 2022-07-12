let arr = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr)

let farr = arr.reduce((res,v,i,arrr)=>{
    return res.concat(v)
})
console.log("After reduce");
console.log(farr);
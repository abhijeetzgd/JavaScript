/*
*using this single method we can perform push(),pop(),
 shift(),unshift() .  
*returns deleted elememrs from array in array format
*didnot update older array while deleting
*/

let month = ['jan','feb','mar','April','May','jun']
//Adding dec at end of array
let newmonth = month.splice(month.length,0,'Dec');//this will add dec at end of array
console.log("After adding dec")
console.log(month)


newmonth = month.splice(month.length-1,1,'Dec');//this will add dec at end of array
console.log("\n\nAfter deleting dec")
console.log(month)

 console.log('Deleted elemrnt: '+newmonth)

// //updating mar to march
// console.log(month)

// month.splice(2,1,"MArch");
// console.log("\n\nAfter upadtin mar")
// console.log(month)

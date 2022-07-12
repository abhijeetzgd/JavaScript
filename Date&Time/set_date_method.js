const d = new Date();

console.log(d.toLocaleString());
console.log(d.setFullYear(2021).toLocaleString());

console.log(d.setFullYear(2021,6,14).toLocaleString())//this method can optionally set month & date as well
console.log(d.setMonth(7).toLocaleString())//jan =0 ,dec =11
console.log(d.setDate(14).toLocaleString())

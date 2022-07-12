/*
* new Date(year,month,day,hour,min,sec,milisec)
        here months start from  0-11
        i.e january is 0th month & december is 11th.
 here atleast 2 parameter are required.month is necessary parametr
*/
var d = new Date(2021,7,21,10,34,5,6);
console.log(d.toLocaleString());

d = new Date(2021);
console.log(d.toLocaleString());


/*
*JavaScript date object represent a single moment in time in a platform independent format
*Date object contain a number that represents milliseconds since 1 january 1970.

there are 4 ways to create new date Object:

1 : new Date()
2 : new Date(year ,month,day,hour,min,sec,milisec) takes 7 argument
3 : new date (milliseconds) 
Note we cannot avoid month section
4 : new Date(date string)
*/



//console.log(Date)

/*
*returns numeric value correspond to the current time .the number of milliseconds elapsed since 1jan 1970
*/
console.log(Date.now());

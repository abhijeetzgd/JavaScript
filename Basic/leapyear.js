var year = 2000;

if(year%4 == 0){
    if(year%400 ==0){

    console.log(year+"It is a leap year");
    } else if(year%100==0){

    console.log(year+"It is not a leap year");
    } else  {
    console.log(year+"It is a leap year");
    }
} else {
    console.log(year+"It is not a leap year");
}
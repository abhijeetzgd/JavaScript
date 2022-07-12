//2nd way of creating object
//there is no need to write function as well after ES6
let bioData = {
    myName : 'abhijeet',
    myAge : 22,
    getData(){
        console.log(`my name = ${bioData.myName} and age is ${bioData.myAge}`);
    }
}
bioData.getData();
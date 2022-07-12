//1st way of creating object

let bioData = {
    myName : 'abhijeet',
    myAge : 22,
    getData : function(){
        console.log(`my name = ${bioData.myName} and age is ${bioData.myAge}`);
    }
}
bioData.getData();
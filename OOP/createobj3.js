//3rd way of creating object
//creating nasted object
let bioData = {
    myName :{
        fName : 'Abhijeet',
        mName : 'SAnjay',
        lName : "Zagade"
    },
    myAge : 22,
    getData(){
        console.log(`my name is ${bioData.myName.fName} ${bioData.myName.mName} ${bioData.myName.lName} and age is ${bioData.myAge}`);
    }
}
bioData.getData();
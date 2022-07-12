let bioData = {
    myName : {
        realName : 'Vinod',
        channel : 'Thapa Tachnical'
    },
    myAge : 22,
    getData(){
        console.log(`my name is ${bioData.myName.realName} and ${bioData.myName.channel}is my channel name.\nmyAge is ${bioData.myAge}`)
    }
}
bioData.getData();
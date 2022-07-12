//this object work with arrow => function but will point to global object always

const obj ={
    myName:'Abhjeet',
    Name : ()=>{
        console.log('this');
    }
}
Name();
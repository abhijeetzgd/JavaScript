
const obj ={
    name : 'Abhijeet',
    demo(){
        console.log(obj.name); 
        console.log(this) ;
    }
    
}
obj.demo()
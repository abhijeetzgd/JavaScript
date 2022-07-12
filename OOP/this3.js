name = 'Abhijeet';//global scope windeo can see

function demo(){
    console.log(this.name); /*abhijeet*/
   // console.log(this) //still referes to indow object
}
demo();
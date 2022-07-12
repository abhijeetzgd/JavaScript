function myName(){
    console.log(this);
}
myName();
/* still this refers to global window object*/
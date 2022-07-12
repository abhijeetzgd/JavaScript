const myBioData = {
    fname : 'Abhijeet',
    mname : 'Sanjay',
    lname : 'Zagade',
    age : 22
}
// let myage = myBioData.age;
// let myname = myBioData.fname;
//here we are storing dataelement is another variable

//to avoid it we can use object destructuring

let{fname,name2,name3,ag}=myBioData;
console.log(fname);
console.log(fname,name2,name3);

//we have to ue same variable name ,it made variable can acces without object name
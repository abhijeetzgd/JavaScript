/*
In synchronous java script we cannot do 2 task simulataneously.
*/

const fun2=()=>{
    console.log('in fun 2');
}
const fun1 =()=>{
    console.log('In fun1');
    fun2();
    console.log('Again in Fun1');
}
fun1();
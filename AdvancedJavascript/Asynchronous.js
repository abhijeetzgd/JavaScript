/*
In asynchronus javascript program ,parallel operation is performed
i.e multiple task is performe simultaneously
*/

const fun2=()=>{
    setTimeout(()=>{
        console.log("in fun 2");
    },3000);
}
const fun1=()=>{
    console.log('In fun1');
    fun2()
    console.log('again In fun1');

}
fun1();
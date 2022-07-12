/*
*a closure is the combination of a function bundled togather(enclosed)with reference to its surrounding state(lexica environment)
*In other words, a closure gives you access to an outer function's scope from an inner function.
*In javascript, closure are created every time a function is created at function creation time.
*/
/*
const outer =(a)=>{
    let b=10;
    const inner=()=>{
        sum = a+b;
        console.log(sum);
    }
    inner()
}
outer(10);
*/
//above example is same as lexical scoping,so difference is in below example


const outer =(a)=>{
    let b=10;
    const inner=()=>{
        sum = a+b;
        console.log(sum);
    }
    return inner
}
let catchinner=outer(10);
catchinner();
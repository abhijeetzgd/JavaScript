/*
* the scope chain is used to resolve the value of variable names in 
js
* scope chain in js is lexically defined which means that we can see 
what the scope chin will be b
*at the top we have global scope which is the window object in 
brouser
*lexical scopig means now the inner function can get access to their 
parent functions variables the vice-versa is not true
*/

let a = 'hello'    ; //global
    const first = () =>{
        let b = 'how are you?';
        const second = ()=>{
            let c ="finne!!";
            console.log(a+b+c);
        }
        second();
    }
    first();

/* we have a creation phase and execution phase .hoisting in javascript is mechanism where variable and functions are moved to top of thier scope before the code execute
*/

console.log(myname);
var myname;
myname = 'abhijeet';

/* how it will be in output while creation phase 
1: var myname = undefined;
2:console.log(myname)
3:myname = 'thapa'

/*
in ES2015 hoisting is avoided by using the let keyword insteadd of var (the other difference is that variables declared with 'let' are local to surrounding block,not to entire function)
*/
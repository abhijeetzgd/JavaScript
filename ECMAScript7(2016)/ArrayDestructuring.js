// tradition way of accessing elements

const myFriends = ['Abhijeet','Abhishek','Tushar','Divya','sujay']

// let f0 = myFriends[0]
// let f1 = myFriends[1]
// let f2 = myFriends[2]
// let f3 = myFriends[3]
// let f4 = myFriends[4]

// console.log(f0,f1,f2,f3,f4);

/*what if there are 1000elements in array and we want to assin a variable to each of element in array then we can use*/

// let[f0,f1,f2,f3,f4]=myFriends;
// console.log(f0,f1,f2,f3,f4);

let[f0,f5='Amisha',f6='Shivam']=myFriends;
console.log(f0,f5,f6);

/* this is known as array destructuring
*/
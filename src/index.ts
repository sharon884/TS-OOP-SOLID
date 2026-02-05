// let value : string;
// value = "sharon";
// console.log(value)


// let num : number = 25;

// =


interface User {
  name : string;
  age : number;
  email : string;
};



const person = {
  name : "sharon",
  age :29,
  email : "sharonsharon@gmail.com",
};


const user : User = person;

console.log(user);

interface App {
  name : number;
  age : number;
};


const app  = {
  name : 39,
  age  : 80,
  sum : 40,
  avg : 35,
};


const n : App = app;

console.log(n)


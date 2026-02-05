interface User { 
  name : string;
};


function printUser ( user : User, age :number ) : void {
  console.log(user.name);
  console.log(age)
};

let v = printUser({ name:"sharon" }, 20)

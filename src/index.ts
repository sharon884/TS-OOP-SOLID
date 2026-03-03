function add ( a : number, b : number ) : number {
      return a + b;
};


function greet  ( name : string, age ? : number ) : string {
      return age ? `${name} is ${age}` : name;
};


function greetUser ( name : string = "Guest" ) : string {
      return  `helow ${name}`;
};








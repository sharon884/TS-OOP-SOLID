type user = {
     name : string;
     role : string;
};


function createUser ( name : string, role : string = "user" ) : user {

     let u : user = {
           name : name,
           role : role,
     };

     return u;


       
};


console.log(createUser("Champ")); 
// { name: "Champ", role: "user" }

console.log(createUser("Champ", "admin")); 
// { name: "Champ", role: "admin" }
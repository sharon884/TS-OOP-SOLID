type user  = {
     name : string;
     city : string;
     age : 49;

};

type doduo = Readonly<Omit<user,"name">>;

const u : doduo = {
     city : "sharon",
     age : 49,
     
}






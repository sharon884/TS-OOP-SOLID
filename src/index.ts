interface f {
   name : string;
};

function user ( param : f ) : void {
    console.log(param.name);
};

user ( { name : 'champ'} );

user ({ name : "sharon", age : 20 });
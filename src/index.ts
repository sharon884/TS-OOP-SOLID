type user  = {
     name : string;
     city : string;
     age : 49;

};

 type updateUser = Partial<user>;
 type pickone = Pick<user , "name" | "age" >;

 






// class Product {

//   public name : string;
//   private price : number;
//    private quantity : number;


//    constructor( name : string, price: number, quantity : number ) {
//     this.name = name ,
//     this.price = price, 
//     this.quantity = quantity

    
//    };


//    getPrice () {
//     return this.price;
//    };

//    getq () {
//     return this.quantity;
//    };


//    mPrice ( amount : number ) : void {

//        if ( amount < 0 ) {
//         throw new Error(" amount is less than 0 is not possible");
//        };

//        this.price = this.price + amount;
//    };


//    mq ( q : number ) : void {
    
//        if ( q < 0 ) {
//         throw new Error('quantiy is less than 0 its not possible');
//        };

//        this.quantity = this.quantity + q;
//    };

// };


// const p = new Product('sharon',3,-5);


// p.name = 'aleena'
// p.mPrice(200);
// // p.mPrice(-1);
// p.mq(1);

// console.log(p)


class User {
    
      public name : string;
      public email : string;
      

      constructor ( name : string,email : string ) {

          this.name = name,
          this.email = email;
      };

      login ( role : string  ) : void  {

         if ( role === "user" ) {
            
              console.log('loggin succesfull');
         }else {
            throw new Error("logging unsuccessfull");
         };

      };


};






const u = new User('name','sharon@gmail.com');
u.login("user");



class Admin {

    public name : string;
    public email : string;


    constructor ( name : string, email : string ) {

        this.name = name;
        this.email = email;
    };


    login ( role : string ) : void  {
        

        if ( role === "admin" ) {

            console.log("login successfull");
        }else {
            console.log("login unsuccessfull");
        }
        ;
    }


};


const a = new Admin('name',"jfklasjflk");
a.login("admin");



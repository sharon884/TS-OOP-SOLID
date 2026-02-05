

// // class Product {

// //   public name : string;
// //   private price : number;
// //    private quantity : number;


// //    constructor( name : string, price: number, quantity : number ) {
// //     this.name = name ,
// //     this.price = price, 
// //     this.quantity = quantity

    
// //    };


// //    getPrice () {
// //     return this.price;
// //    };

// //    getq () {
// //     return this.quantity;
// //    };


// //    mPrice ( amount : number ) : void {

// //        if ( amount < 0 ) {
// //         throw new Error(" amount is less than 0 is not possible");
// //        };

// //        this.price = this.price + amount;
// //    };


// //    mq ( q : number ) : void {
    
// //        if ( q < 0 ) {
// //         throw new Error('quantiy is less than 0 its not possible');
// //        };

// //        this.quantity = this.quantity + q;
// //    };

// // };


// // const p = new Product('sharon',3,-5);


// // p.name = 'aleena'
// // p.mPrice(200);
// // // p.mPrice(-1);
// // p.mq(1);

// // console.log(p)


// // class User {
    
// //       public name : string;
// //       public email : string;
      

// //       constructor ( name : string,email : string ) {

// //           this.name = name,
// //           this.email = email;
// //       };

// //       login ( role : string  ) : void  {

// //          if ( role === "user" ) {
            
// //               console.log('loggin succesfull');
// //          }else {
// //             throw new Error("logging unsuccessfull");
// //          };

// //       };


// // };






// // const u = new User('name','sharon@gmail.com');
// // u.login("user");



// // class Admin {

// //     public name : string;
// //     public email : string;


// //     constructor ( name : string, email : string ) {

// //         this.name = name;
// //         this.email = email;
// //     };


// //     login ( role : string ) : void  {
        

// //         if ( role === "admin" ) {

// //             console.log("login successfull");
// //         }else {
// //             console.log("login unsuccessfull");
// //         }
// //         ;
// //     }


// // };


// // const a = new Admin('name',"jfklasjflk");
// // a.login("admin");



// // class BaseClass {
// //     public name : string;
// //     public email : string;

// //     constructor( name : string, email : string, ) {
// //         this.name = name;
// //         this.email = email;
// //     };
// // };




// // class User extends BaseClass {

// //     constructor( name : string, email : string , public role : string ) {
// //         super ( name, email);
// //     };


// //     checkRole () : void {
// //         if ( this.role == "user") {
// //             console.log( 'authenticated');
// //         }else {
// //             console.log("not authenticated");
// //         }
// //     };

// // };




// // class Admin extends BaseClass {
       
    
     
// //     constructor ( name : string , email : string, public role : string )  {
// //          super(name, email);
// //     };

// //     checkRole () : void {

// //         if ( this.role == "admin" ) {
// //             console.log('authenticated');
// //         }else {
// //             console.log("not authenticated");
// //         }
// //     };


// //     deleteUser () : void {
        
// //          if ( this.role === "admin" ) {
// //             console.log("user deletion is successfully completed");
// //          }else {
// //             console.log("user deletion failed due to incorrect role");
// //          }
// //     };


// // }



// // const b = new Admin('sharon', 'lkafd','user' );
// // b.checkRole();
// // b.deleteUser(); 

// // const c = new User("aleena", 'idfaj', 'admin');
// // c.checkRole();




// // Base class
// class BaseUser {
//   public name: string;
//   public email: string;
//   protected role: string;

//   constructor(name: string, email: string, role: string) {
//     this.name = name;
//     this.email = email;
//     this.role = role;
//   }

//   login(): void {
//     console.log(`${this.role} logged in successfully`);
//   }

//   checkRole(expectedRole: string): boolean {
//     return this.role === expectedRole;
//   };

//   getWelcomeMessage() : void  {
//      console.log('welcome')
//   }
// }



// // User class
// class User extends BaseUser {
//   constructor(name: string, email: string) {
//     super(name, email, "user");
//   };

//   getWelcomeMessage(): void {
//       console.log('welcome user')
//   }
// }




// // Admin class
// class Admin extends BaseUser {
//   constructor(name: string, email: string) {
//     super(name, email, "admin");
//   }

//   deleteUser(): void {
//     console.log("User deleted successfully by admin");
//   }

//   getWelcomeMessage(): void {
//       console.log("welcome admin");
//   }
// }



// // Usage
// const user = new User("Aleena", "aleena@gmail.com");
// user.login();
// user.getWelcomeMessage()
// // user.deleteUser(); ❌ not allowed


// const admin = new Admin("Sharon", "sharon@gmail.com");
// admin.login();
// admin.deleteUser();
// admin.getWelcomeMessage();

// function add ( a : number , b : number  )  : number {
//    return a+b;
// };


// console.log(add(2,3));




// function sum ( a,b ) {
//   return a + b;
// };

// sum(1,"2");
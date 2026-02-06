// // class Student {
// //   name: string;

// //   constructor(name: string) {
// //     this.name = name;
// //   }

// //   getRole() {
// //     console.log("I am a student");
// //   }
// // }

// // class Teacher {
// //   name: string;

// //   constructor(name: string) {
// //     this.name = name;
// //   }

// //   getRole() {
// //     console.log("I am a teacher");
// //   }
// // }


// class Student {
//     public name : string;

//     constructor( name: string ) {
//         this.name = name;
//     };

//     print( ) : void  {
//          console.log( " i am student " );
//     };
// };



// class Teacher extends Student {
//        age : number ;

//        constructor ( name : string , age : number ) {
//         super(name);
//         this.age = age;
//        };


//        print() : void  {
//              console.log( "i am teacher");
//        }
// };



// let s = new Student("sharon");
// let h = new Teacher("aleena",26);
// s.print();
// h.print();


// interface Payment {
//     amount : number;

//     print () : void;
// };


// class Cash implements Payment {

//     amount : number ;

//     constructor ( amount : number) {
//         this.amount = amount;
//     };

//     print() : void {
//         console.log("amount recieved by Cash");
//     };
// };




// class Upi implements Payment {


//     amount : number;
//      name : string;

//      constructor ( amount : number, name : string ) {
//         this.amount = amount;
//         this.name = name;
//      };


//      print(): void {
//           console.log("amount recieved by Upi")
//      }
// }



// type User =  {
//     name : string;
//     age : number;
// };


// let user : User = { name: "sharon",age:0};
// let user2 : User = { name : 30,age:"sharong"};


interface User {
    name : string;
    age : number;
};


const user : User = { name : "sahor", age : 30};
const user1 : User = { name : 39, age : ""}



// class BankAccount {
//      private balance : number = 0;

//      deposit ( amount : number ) {
//           if ( amount > 0 ) {
//              this.balance = this.balance + amount;
//           };
//      };


//      getBalance () {
//         return this.balance;
//      }
// }





// interface Payment {
//      pay( amount : number ) : void ;
     
//     };



//     class StripePayment implements Payment {
         
//         pay(amount: number  ) {
//               console.log(" processing the payment" + amount);
//           };
//     };


//     const payment : Payment = new StripePayment();

//     payment.pay(100);



class Animal {
    move () {
         console.log("this is animal")
    }
};


class Dog extends Animal {
     bark () {
         console.log("dog is barking");
     }
};



const check = new Dog();
check.bark();
check.move();



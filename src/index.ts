// class BankAccount {

//     private balance: number = 0;


//     public deposit(num: number): void {

//         if (num > 0) {
//             this.balance = this.balance + num;
//         };

//     };



//     public withdraw(num: number): void {
//         if (num > 0 && this.balance >= num) {
//             this.balance = this.balance - num;
//         };
//     };

//     public getBalance(): any {

//         return this.balance;
//     }

// };


//  const sharon = new BankAccount();
//  sharon.deposit(1000);
//  sharon.withdraw(400);
//  console.log(sharon.getBalance());



// interface CalculateArea {

//     area(length: number, Width: number): number;
// };



// class Circle implements CalculateArea {
//     area(length: number, Width: number): number {

//         let result;
//         result = length * Width;

//         return result
//     }
// };


// class Rectangle implements CalculateArea {
//      area(length: number, Width: number): number {
//          let sum ;
//          sum = length * Width;
//          return sum;
//      }
// };




// const circle = new Circle();
// const rectangle = new Rectangle();

// console.log(circle.area(10,45));
// console.log(rectangle.area(20,20));


// abstract class Payment {
//      abstract pay( amount : number) : void;
// };


// class creditCard extends Payment {
//      pay(amount: number): void {
//          console.log("credit card payment completed rs " + amount);
//      }
// };


// class UPI extends Payment {
//      pay(amount: number): void {
//          console.log('credit card payment completed rs ' + amount);
//      }
// }

// const payment : Payment = new creditCard();
// payment.pay(100);

// const payment2 : Payment = new UPI();
// payment.pay(200);



// interface  Show {
//      who () : void  ;
//  };


//  class Dog implements Show {
//     who(): void {
//         console.log("am a dog");
//     }  
//  };

//  class Cat implements Show {
//      who(): void {
//          console.log("am a cat");
//      }
//  };


//  class Cow implements Show {
//      who(): void {
//           console.log("am a cow");
//      }
//  }


class Parrent {
     show () : void  {
         console.log("am parrent of you")
     }
};


class Child extends  Parrent {
     who (): void {
         console.log("am child");
     };

};

 
class GrandChild extends Child {
       showYou () : void {
         console.log("am grandChild")
       };


}



const c =  new Child();
c.show();


const f  = new GrandChild();
f.who();


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



interface CalculateArea {

    area(length: number, Width: number): number;
};



class Circle implements CalculateArea {
    area(length: number, Width: number): number {

        let result;
        result = length * Width;

        return result
    }
};


class Rectangle implements CalculateArea {
     area(length: number, Width: number): number {
         let sum ;
         sum = length * Width;
         return sum;
     }
};




const circle = new Circle();
const rectangle = new Rectangle();

console.log(circle.area(10,45));
console.log(rectangle.area(20,20));
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
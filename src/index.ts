class BankAccount {
     private balance : number = 0;

     deposit ( amount : number ) {
          if ( amount > 0 ) {
             this.balance = this.balance + amount;
          };
     };


     getBalance () {
        return this.balance;
     }
}
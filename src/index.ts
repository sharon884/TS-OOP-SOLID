class Payment {
     amount : number;
     
     constructor (amount : number) {
          this.amount = amount;
     };
     
     
     pay () : string {
         return ` payment of ${this.amount} completed successfully `
     };
     
};



class UPIPayment extends Payment {
    constructor ( amount : number) {
        
     super( amount);
    };
    
    pay() : string  {
         return ` UPI payment ${this.amount } completed successfully`;
    };
};


class CardPayment extends Payment {
     constructor ( amount : number ) {
         super ( amount);
     };
     
     pay()  {
          return `card payment ${this.amount } completed successfuly`;
     };
};

const u = new UPIPayment(8888);
console.log(u.pay());


const s = new CardPayment(4000);
console.log(s.pay());

// let studentName = "Rahul";
// let totalFee = 5000;
// let paidAmount = 0;


// function payFee(amount: number) {
//   paidAmount = amount;
// };

// function printReceipt() {
//   console.log(studentName);
//   console.log(paidAmount);
// };



class Std {
    
   public studentName : string;
    private totalFee : number;
   private paidAmount : number


   constructor ( studentName : string, totalFee : number  ) {
       this.studentName = studentName;
       this.totalFee = totalFee;
    
   };


   payAmount ( amount : number ) : void {
     if ( amount >  0)  {
          this.paidAmount = this.paidAmount + amount;
     }else{
        console.log("amount is less than 0");
     }
   };


   printReciept () : void {
      console.log(this.studentName);
      console.log(this.totalFee);
      console.log(this.paidAmount);
   }
};



let std1 = new Std("sharon",5000);

console.log(std1);
std1.payAmount(5000);
std1.printReciept;
std1.totalFee;
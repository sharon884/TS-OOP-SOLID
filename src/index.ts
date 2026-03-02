class Employee {


    private salary : number;


     constructor ( amount : number ) {
         this.salary = amount;
     }



     public increaseSalary ( amount : number ) :void {
           if ( amount < 0  ) {
              return console.log(" amount is less than 0 . Operation failed")
           };

           this.salary = this.salary + amount;
     };



     public getSalary () : number {
           return this.salary;
     };
};



const obj = new Employee(1000);
obj.increaseSalary(2000);
console.log(obj.getSalary());


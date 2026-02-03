class Product {

   name : string;
   price : number;
   quantity : number;


   constructor( name : string, price: number, quantity : number ) {
    this.name = name ,
    this.price = price, 
    this.quantity = quantity

    
   }
};


const p = new Product('sharon',3,-5);


p.name = 'aleena'
console.log(p)
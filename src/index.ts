class Product {
     title : string;
     price : number ;
     
     constructor ( title : string, price : number ) {
          this.title = title;
          this.price = price ;
     };
     
     getProduct () : string {
          return ` Product : ${this.title} - Price ${this.price}`
     };
};


const product = new Product("Laptop", 40000);
console.log(product);
console.log(product.getProduct())
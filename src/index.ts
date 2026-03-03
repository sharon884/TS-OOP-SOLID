function getAverage(...numbers : number[] ) :number {
      let sum : number;
      let avg : number ;
      sum = numbers.reduce((acc,num) => acc + num,0);
      avg = sum / numbers.length;
      return avg ? avg : 0;
};


console.log(
     getAverage(10, 20, 30)// 20
// 0
)

console.log(getAverage());
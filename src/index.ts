

class Employee {
    calculateBonus(): number {

        return 0;
    }

}




class Developer extends Employee {

    private salary: number = 20200;

 calculateBonus(): number {
        return this.salary * 0.1;
    }

    public printBonus( emp : Employee ) {
         return this.calculateBonus();
    }

};


class Manager extends Employee {
    private salary: number = 300000;

    calculateBonus(): number {
        return this.salary * 0.2;
    }
};


const dev = new Developer();
console.log( dev.printBonus(dev));

const mang = new Manager();
console.log(mang.calculateBonus());
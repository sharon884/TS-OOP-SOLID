// class Student {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   getRole() {
//     console.log("I am a student");
//   }
// }

// class Teacher {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   getRole() {
//     console.log("I am a teacher");
//   }
// }


class Student {
    public name : string;

    constructor( name: string ) {
        this.name = name;
    };

    print( ) : void  {
         console.log( " i am student " );
    };
};



class Teacher extends Student {
       age : number ;

       constructor ( name : string , age : number ) {
        super(name);
        this.age = age;
       };


       print() : void  {
             console.log( "i am teacher");
       }
};



let s = new Student("sharon");
let h = new Teacher("aleena",26);
s.print();
h.print();

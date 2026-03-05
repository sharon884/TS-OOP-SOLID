class User {
    name : string;
    email : string;

    constructor ( name : string , email : string ) {
        this.name = name;
        this.email = email;
    };


    getUserInfo() : string {
        return `$name is ${this.name} age is ${this.email }`
    }
};


const user1 = new User("sharon", "sharon@gmail.com");
console.log(user1);
console.log(user1.getUserInfo());
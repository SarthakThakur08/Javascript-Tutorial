const office  = {
    calctax() {
        console.log("Salaries Will be Lower by 20%.");
    }
};

class Tatacar {
    start (){
        console.log("Car Engine is Started");
    }
    
    stop (){
        console.log("Car Engine is Stop");
    }
}

let harrier = new Tatacar();

class Human  {
    Ear() {
        console.log("Ear")
    }

    Nose() {
        console.log("Nose")
    }

    Eyes() {
        console.log("Eyes")
    }
}

class person extends Human {
    routine () {
        console.log("Humans Are Understandable.")
    }
}

class User {
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ",DATA);
    }
}

class Admin extends User {
    constructor(name,email) {
        super(name,email);
    }
    editData() {
        DATA = "Data Edited by Admin";
    }
}

let student1 = new User("Sarthak Thakur","SarthakThakur@email.com");
let student2 = new User("Tannu Sharma","tannusharma@email.com");

let admin1 = new Admin("Admin User","admin@email.com");

let a = 80;
let b = 70;
console.log("a = ",a);
console.log("b = ",b);
console.log("a+b = ",a + b);
try{
    console.log("a+b = ",a + c);
}catch(err){
    console.log("Error Caught: ",err.message);
}
console.log("a+b = ",a + b);
console.log("a+b = ",a + b);
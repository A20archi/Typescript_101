
console.log("Hello, TypeScript!");

console.log("This is a TypeScript project setup example.");

// You can add your TypeScript code here and it will be compiled to JavaScript in the dist folder.

//just need to run `tsc -w` command in the terminal to compile the code

console.log("Make sure to check the tsconfig.json file for configuration options.");

// Also, check out the other files in this project for examples of TypeScript features like types, interfaces, and more.

// To run the compiled JavaScript code, use the command `node dist/index.js` in the terminal.

class User {
  protected _courseCount = 1;

  get courseCount(): number {
    return this._courseCount;
  }

set courseCount(count: number) {
    if (count > 0) {
      this._courseCount = count;
    } else {
        throw new Error("Course count must be greater than zero.");
        //or
        //console.log("Invalid course count.");
    }
  }
  // Property modifiers
  //setters does not return anything,it just modifies the value

  //we can setup a private property and use getter and setter to access and modify it

  private deleteToken (){
    console.log("Token deleted");
  }


  public email: string;
  private name: string;
  readonly city: string; // Optional property
  constructor(email: string, name: string, city: string) {
    this.email = email;
    this.name = name;
    this.city = city;
  }

  get getAppleEmail(): string {
    return `Apple Email: ${this.email}`;
  }

  set setAppleEmail(email: string) {
    if (email.endsWith("@apple.com")) {
      this.email = email;
    } else {
      console.log("Invalid Apple email.");
    }
  }
}

const archi = new User("archi@example.com", "Archi", "New York");
console.log(archi);

//archi.name = "New Name"; // Error: Property 'name' is private and only accessible within class 'User'.


//archi.city = "Los Angeles"; // Error: Cannot assign to 'city' because it is a read-only property.

console.log("User class example with readonly property.");

class Ticket {
    constructor(
        public title: string,
        public price: number
    ) { }

   public getTicketInfo(): string {
       return `Title: ${this.title}, Price: ${this.price}`;
   }
}

console.log("Ticket class example with shorthand property declaration.");

const ticket = new Ticket("Concert", 50);
console.log(ticket.getTicketInfo());

//Keywords - access modifiers - public, private, protected

//public - can be accessed from anywhere
//private - can be accessed only within the class
//protected - can be accessed within the class and its subclasses
//readonly - can be read but not modified after initialization

class Subuser extends User {
    constructor(email: string, name: string, city: string) {
        super(email, name, city);
    }
    isFamily: boolean = true;
    changeCourseCount(newCount: number) {
        this._courseCount = newCount; // Accessing the setter from the parent class
    }
}



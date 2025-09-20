
console.log("Hello, TypeScript!");

console.log("This is a TypeScript project setup example.");

// You can add your TypeScript code here and it will be compiled to JavaScript in the dist folder.

//just need to run `tsc -w` command in the terminal to compile the code

console.log("Make sure to check the tsconfig.json file for configuration options.");

// Also, check out the other files in this project for examples of TypeScript features like types, interfaces, and more.

// To run the compiled JavaScript code, use the command `node dist/index.js` in the terminal.

class User {
    public email: string;
    private name: string;
    readonly city: string; // Optional property
    constructor(email: string, name: string, city: string) {
        this.email = email;
        this.name = name;
        this.city = city;

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

//getters and setters


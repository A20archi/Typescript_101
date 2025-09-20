const score : Array<number> = [];
const names : Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}//any type is not recommended as it defeats the purpose of typescript

function identityThree<Type>(val: Type): Type {
    return val;
}
//Type is a placeholder for the actual type that will be used when the function is called;this is a generic function.

function identityFour<T>(val: T): T {
    return val;
}//T is a convention for naming generic types, but you can use any valid identifier.

interface Bottle {
    brand: string;
    type: number;
}

function identityFive<T extends Bottle>(val: T): T {
    return val;
}

const myBottle = identityFive({ brand: "Coke", type: 1 });
// Here, T is constrained to types that extend the Bottle interface.
console.log(myBottle);

function getSearchProducts<T, U>(products: T[], criteria: U): T[] {
    // Dummy implementation for demonstration purposes
    console.log(`Searching products based on criteria: ${JSON.stringify(criteria)}`);
    return products;
}

getSearchProducts([{ name: "Laptop", price: 1000 }, { name: "Phone", price: 500 }], { priceRange: "500-1000" });

// T represents the type of products in the array
// U represents the type of criteria used for searching

//Generic Arrow function
const getMoreSearchProducts = <T, U>(products: T[], criteria: U): T[] => {
    // Dummy implementation for demonstration purposes
    console.log(`Searching products based on criteria: ${JSON.stringify(criteria)}`);
    return products;
}

//Using Type Parameters in Generic Constraints

function anotherFunction<T, U extends keyof T>(val: T, key: U): T {
    return val;
}
 
anotherFunction({ name: "Alice", age: 30 }, "name"); // Valid

interface Database {
    connection: string;
    username: string;
    password: string;
}

function anotherFunctionTwo<T , U extends keyof Database>(val: T, key: U): T {
    return val;
}

anotherFunctionTwo({ connection: "Bob", username: "bob123" ,password: "pass123" }, "connection"); // Valid
//anotherFunctionTwo({ connection: "Bob", username: "bob123" }, "name"); // Error: Argument of type 'name' is not assignable to parameter of type 'keyof Database'.

//In the above example, U is constrained to be a key of the Database interface, ensuring that only valid keys can be passed as the second argument. 

//Generic Classes

interface Quiz {
    name: string;
    type: string;
}

interface Course {
    name: string;
    duration: number;
    price: number;
    author: string;
    subject: string;
}

class Sellable<T> {
    public cart: T[] = []
    
    addToCart(product: T): void {
        this.cart.push(product);
    }

    getCart(): T[] {
        return this.cart;
    }   
}

const sellableQuiz = new Sellable<Quiz>();
sellableQuiz.addToCart({ name: "Math Quiz", type: "Multiple Choice" });
sellableQuiz.addToCart({ name: "Science Quiz", type: "True/False" });
console.log(sellableQuiz.getCart());
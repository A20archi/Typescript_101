const User = {
    name: "John",
    email: "john@example.com",
    age: 30,
    isActive: true,
};

function createUser ({ name, isPaid }: { name: string, isPaid: boolean }) {
    // logic to create user
}
createUser({ name: "Alice", isPaid: false }); //function call with object as argument

//extra properties are allowed in TS, but only the required ones are checked
//the object can have more properties than defined in the function parameter type
//but it must have at least the required properties
let newUser = { name: "Bob", isPaid: true, email: "bob@example.com" };

createUser(newUser); //by simply passing newUser, TS will only check for the required properties

//example of function with object as parameter

function createCourse({name, price}: { name: string, price: number }): { name: string, price: number } {
    return { name, price };
} //here we specify the return type of the function as well as the parameter types

createCourse({ name: "TypeScript", price: 99 });

//Type Aliases

type UserType = {
    name: string;
    email: string;
    age: number;
    isActive: boolean;
};
//defining a type alias for user object

function createNewUser(user: UserType): UserType {
    return user;
}
 //using the type alias in function parameter and return type
 //similar to structs in other languages

createNewUser({ name: "Charlie", email: "charlie@example.com", age: 28, isActive: true });

//Another example of type alias

type Point = {
    x: number;
    y: number;
};

function printCoordinates(point: Point){
    console.log(`X: ${point.x}, Y: ${point.y}`);   
}
//using the Point type alias in function parameter

printCoordinates({ x: 10, y: 20 });

export {};
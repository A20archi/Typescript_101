function detectType(val: number | string | null) {
    if (typeof val === "string") {
        console.log("String detected:", val);
        return val.toLowerCase();
    } else if (typeof val === "number") {
        console.log("Number detected:", val);
        return val + 3;
    } else {
        console.log("Null detected");
        return null;
    }
}
// Type narrowing using typeof checks

// Example usage:
console.log(detectType("Hello")); // Output: "hello"
console.log(detectType(5));       // Output: 8
console.log(detectType(null));    // Output: null

//this is called typeguarding or type narrowing

function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide an ID.");
        return;
    } else {
        console.log("ID provided:", id);
        return id.toLowerCase();
    }
}

//what if array is there as well

function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") { 
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    } else {
        console.log("No strings to print.");
    }   
}

//Example usage:
printAll(["Hello", "World"]); // Output: "Hello" "World"
printAll("SingleString");     // Output: "SingleString"
printAll(null);               // Output: "No strings to print."


//in-operator narrowing

interface fish {
    swim: () => void;
}
interface bird {
    fly: () => void;
}
interface Human {
    speak: () => void;
}

function isFish(pet: fish | bird | Human){
    if ("swim" in pet) {
        return true;
    } else if ("fly" in pet) {  
        return false;
    } else {
        return false;
    }
}

//in basically checks if the property exists in the object or not
//in narrow down which instance it is to be checked

//instanceof narrowing

interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}

//instanceof is used to check if an object is an instance of a particular class (typeguard of new)

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log("It's a date:", x.toUTCString());
    } else {
        console.log("It's a string:", x.toUpperCase());
    }   
}

//instanceof checks if the object is an instance of the class Date or not

type Fish = {
    swim: () => void;
    layEggs: () => void;
}
type Bird = {
    fly: () => void;
    layEggs: () => void;
}

function isFishPet(pet: Fish | Bird){
    if("swim" in pet){
        return true;
    }
    return false;
}
//or 
function isBirdPet(pet: Fish | Bird): pet is Bird {
    return (pet as Bird).fly !== undefined;
}

//Never type narrowing

interface Circle {
    kind: "circle";
    radius: number;
}
interface Square {
    kind: "square";
    sideLength: number;
}
interface Rectangle {
    kind: "rectangle";
    length: number;
    width: number;
}
type Shape = Circle | Square | Rectangle;

function getArea(shape: Shape){
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "rectangle":
            return shape.length * shape.width;
        default :
            throw new Error("Unknown shape");
    }
}
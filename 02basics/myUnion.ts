let score : number | string = 33;
score = "Thirty Three";
score = 44;
// score = true; //Error: Type 'boolean' is not assignable to type 'string | number'
score = "55";

type User = {
    name: string;
    id: number;
};

type Admin = {
    username: string;
    id: number;
};

let hitesh : User | Admin = { name: "Hitesh", id: 3345 };
hitesh = { username: "hiteshchoudhary", id: 3345 };
//as both User and Admin have 'id' property of same type, it's allowed to reassign
// hitesh = { username: "hiteshchoudhary", id: "3345" }; //Error: Type 'string' is not assignable to type 'number'
// hitesh = { name: "Hitesh", id: "3345" }; //Error: Type 'string' is not assignable to type 'number'

function getDBId(id: number | string) {
    //making some API calls
    //Error: Property 'toLowerCase' does not exist on type 'string | number'.
    //if we are sure that the id is of string type then we can use type assertion
    //    console.log(`DB id is: ${id.toLowerCase()}`);
    //rather we can do this
if (typeof id === "string") {
    console.log(`DB id is: ${id.toLowerCase()}`);
} else {   
    console.log(`DB id is: ${id}`);
}
}

getDBId(3);
getDBId("3");
// getDBId(true); //Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'

//Array of union types

const data: (string | number)[] = [1, "two", 3, "four"];

const data1 : string[] | boolean [] = [false, true, false];

data.push(5);
data.push("six");

// data.push(false); //Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'

let pi: 3.14 | "3.14" = 3.14;
pi = "3.14";
// pi = 3; //Error: Type '3' is not assignable to type '3.14 | "3.14"'

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
seatAllotment = "middle";
seatAllotment = "window";
// seatAllotment = "crew"; //Error: Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'

export {};







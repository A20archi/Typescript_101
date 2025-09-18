"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = "Thirty Three";
score = 44;
// score = true; //Error: Type 'boolean' is not assignable to type 'string | number'
score = "55";
var hitesh = { name: "Hitesh", id: 3345 };
hitesh = { username: "hiteshchoudhary", id: 3345 };
//as both User and Admin have 'id' property of same type, it's allowed to reassign
// hitesh = { username: "hiteshchoudhary", id: "3345" }; //Error: Type 'string' is not assignable to type 'number'
// hitesh = { name: "Hitesh", id: "3345" }; //Error: Type 'string' is not assignable to type 'number'
function getDBId(id) {
    //making some API calls
    //Error: Property 'toLowerCase' does not exist on type 'string | number'.
    //if we are sure that the id is of string type then we can use type assertion
    //    console.log(`DB id is: ${id.toLowerCase()}`);
    //rather we can do this
    if (typeof id === "string") {
        console.log("DB id is: ".concat(id.toLowerCase()));
    }
    else {
        console.log("DB id is: ".concat(id));
    }
}
getDBId(3);
getDBId("3");
// getDBId(true); //Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
//Array of union types
var data = [1, "two", 3, "four"];
var data1 = [false, true, false];
data.push(5);
data.push("six");
// data.push(false); //Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
var pi = 3.14;
pi = "3.14";
// pi = 3; //Error: Type '3' is not assignable to type '3.14 | "3.14"'
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "middle";
seatAllotment = "window";

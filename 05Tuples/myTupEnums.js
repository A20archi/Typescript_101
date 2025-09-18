"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = ["John", 25, true];
//this a union type array which can hold string or number or boolean types
//now a tuple is a special type of array with fixed number of elements where each element has a specific type-priority is of great importance
var tUser;
tUser = [25, "John", true];
// tUser = [25, "John", true, "extra"]; //Error: Source has 4 element(s) but target allows only 3.
// tUser = [25, "John"]; //Error: Source has 2 element(s) but target requires 3.
// tUser = [25, 30, true]; //Error: Type 'number' is not assignable to type 'string'.
var rgb = [255, 0, 255]; //RGB color representation
//tuple with optional values
var tUserOpt;
tUserOpt = [25, "John"]; //valid
tUserOpt = [25, "John", true]; //valid
var newUser = [30, "Doe"];
// newUser[0] = "30"; //Error: Type 'string' is not assignable to type 'number'.
newUser[0] = 30; //valid
//tuples with readonly
var tUserRead = [25, "John", true];
// tUserRead[0] = 30; //Error: Cannot assign to '0' because it is a read-only property.
// tUserRead.push(false); //Error: Property 'push' does not exist on type 'readonly [number, string, boolean]'. 
//one can use tuples with normal array methods as well 
newUser.push("new"); //valid
console.log(newUser); //[ 30, 'Doe', 'new' ]
newUser.pop(); //valid
console.log(newUser); //[ 30, 'Doe' ]

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var heroes = [];
heroes.push("spiderman");
heroes.push("ironman");
heroes.push("thor");
console.log(heroes);
// heroes.push(1); //Error: Argument of type 'number' is not assignable to parameter of type 'string'
var heroPower = [];
heroPower.push({ hero: "spiderman", power: 100 });
heroPower.push({ hero: "ironman", power: 200 });
heroPower.push({ hero: "thor", power: 300 });
var allUsers = [];
allUsers.push({ name: "John", isActive: true });
allUsers.push({ name: "Doe", isActive: false });
// allUsers.push({ name: "Jane", isActive: "yes" }); //Error: Type 'string' is not assignable to type 'boolean'
console.log(heroPower);

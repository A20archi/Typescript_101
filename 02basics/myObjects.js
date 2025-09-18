"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "John",
    email: "john@example.com",
    age: 30,
    isActive: true,
};
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    // logic to create user
}
createUser({ name: "Alice", isPaid: false });
function createCourse(_a) {
    var name = _a.name, price = _a.price;
    return { name: name, price: price };
}
createCourse({ name: "TypeScript", price: 99 });

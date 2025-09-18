"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroes = exports.getHello = exports.login = void 0;
exports.addTwoNumbers = addTwoNumbers;
exports.substractTwoNumbers = substractTwoNumbers;
exports.signUpUser = signUpUser;
function addTwoNumbers(a, b) {
    return a + b;
}
function substractTwoNumbers(a, b) {
    return a - b;
}
function signUpUser(name, email, password) {
    // logic to sign up user
    console.log("User signed up:", name, email);
}
signUpUser("John Doe", "john@example.com", "password123");
var login = function (name, email, isPaid) {
    // logic to log in user
    console.log("User logged in:", name, email, isPaid);
};
exports.login = login;
var getHello = function (s) {
    return "hello " + s;
};
exports.getHello = getHello;
var heroes = ["thor", "spiderman", "ironman"];
exports.heroes = heroes;
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});

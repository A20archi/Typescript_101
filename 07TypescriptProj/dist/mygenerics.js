"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
} //any type is not recommended as it defeats the purpose of typescript
function identityThree(val) {
    return val;
}
//Type is a placeholder for the actual type that will be used when the function is called;this is a generic function.
function identityFour(val) {
    return val;
} //T is a convention for naming generic types, but you can use any valid identifier.
function identityFive(val) {
    return val;
}
const myBottle = identityFive({ brand: "Coke", type: 1 });
// Here, T is constrained to types that extend the Bottle interface.
console.log(myBottle);
function getSearchProducts(products, criteria) {
    // Dummy implementation for demonstration purposes
    console.log(`Searching products based on criteria: ${JSON.stringify(criteria)}`);
    return products;
}
getSearchProducts([{ name: "Laptop", price: 1000 }, { name: "Phone", price: 500 }], { priceRange: "500-1000" });
// T represents the type of products in the array
// U represents the type of criteria used for searching
//Generic Arrow function
const getMoreSearchProducts = (products, criteria) => {
    // Dummy implementation for demonstration purposes
    console.log(`Searching products based on criteria: ${JSON.stringify(criteria)}`);
    return products;
};
//Using Type Parameters in Generic Constraints
function anotherFunction(val, key) {
    return val;
}
anotherFunction({ name: "Alice", age: 30 }, "name"); // Valid
function anotherFunctionTwo(val, key) {
    return val;
}
anotherFunctionTwo({ connection: "Bob", username: "bob123", password: "pass123" }, "connection"); // Valid
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
    getCart() {
        return this.cart;
    }
}
const sellableQuiz = new Sellable();
sellableQuiz.addToCart({ name: "Math Quiz", type: "Multiple Choice" });
sellableQuiz.addToCart({ name: "Science Quiz", type: "True/False" });
console.log(sellableQuiz.getCart());
//# sourceMappingURL=mygenerics.js.map
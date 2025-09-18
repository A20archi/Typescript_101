var user = {
    id: 1,
    name: "John",
    email: "john@example.com",
    isActive: true
};
var payment = {
    id: 1,
    name: "John",
    email: "john@example.com",
    isActive: true,
    cardNumber: "1234-5678-9012-3456",
    cvv: 972,
    expirationDate: "12/25"
};
//payment.id = 2; //Error: Cannot assign to 'id' because it is a read-only property
// so even in intersection types, readonly properties cannot be changed
console.log(payment);

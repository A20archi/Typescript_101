type User = {
    name: string;
    email: string;
    isActive: boolean;
};

//here we shall implement read_only properties in an object
//readonly properties can only be set when the object is created
//they cannot be changed later
type ReadOnlyUser = {
    readonly id: number;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number; //optional property
};
let user: ReadOnlyUser = {
    id: 1,
    name: "John",
    email: "john@example.com",
    isActive: true
};  


//this means that the id property cannot be changed
//user.id = 2; //Error: Cannot assign to 'id' because it is a read-only property

//now we will learn about intersection types
//intersection types allow us to combine multiple types into one
//using the & operator

type CardNumber = {
    cardNumber: string;
};
type PaymentDetails = ReadOnlyUser & CardNumber & {
    cvv: number; //additional property specific to payment details
    expirationDate: string;
};

let payment: PaymentDetails = {
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
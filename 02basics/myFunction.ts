function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

function substractTwoNumbers(a: number, b: number): number {
    return a - b;
}
function signUpUser(name: string, email: string, password: string): void {
    // logic to sign up user
    console.log("User signed up:", name, email);
}
signUpUser("John Doe", "john@example.com", "password123");

let login = (name: string, email: string, isPaid: boolean) => {
    // logic to log in user
    console.log("User logged in:", name, email, isPaid);
};

const getHello = (s:string): string => {
    return "hello " + s;
}
const heroes = ["thor", "spiderman", "ironman"];
heroes.map((hero): string => {
    return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
    console.log(errmsg);
}
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}
export { addTwoNumbers, substractTwoNumbers, signUpUser, login, getHello, heroes, consoleError, handleError };

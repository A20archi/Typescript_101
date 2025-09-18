const heroes: string[] = [];
heroes.push("spiderman");
heroes.push("ironman");
heroes.push("thor");
console.log(heroes);
// heroes.push(1); //Error: Argument of type 'number' is not assignable to parameter of type 'string'

const heroPower: Array<{ hero: string; power: number }> = [];
heroPower.push({ hero: "spiderman", power: 100 });
heroPower.push({ hero: "ironman", power: 200 });
heroPower.push({ hero: "thor", power: 300 });

type user = {
    name: string;
    isActive: boolean;
};

const allUsers: Array<user> = [];
allUsers.push({ name: "John", isActive: true });
allUsers.push({ name: "Doe", isActive: false });
// allUsers.push({ name: "Jane", isActive: "yes" }); //Error: Type 'string' is not assignable to type 'boolean'
console.log(heroPower);
//There's also ReadonlyArray<T> which makes the array immutable
const readOnlyHeroPower: ReadonlyArray<{ hero: string; power: number }> = heroPower;    
// readOnlyHeroPower.push({ hero: "hulk", power: 400 }); //Error: Property 'push' does not exist on type 'readonly { hero: string; power: number; }[]'.
export {};



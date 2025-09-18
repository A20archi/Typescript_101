interface Userinterface {
    readonly db_id: number; //readonly a property
    email: string;
    userId : number;
    isActive: boolean;
    googleId?: string; //optional property

    startTrial: () => string; //method that returns a string
    getCoupon(couponname: string, value: number): number; //method with parameters that returns a number
}

const user1: Userinterface = {
    db_id: 22,
    email: "john.doe@example.com",
    userId: 1,
    isActive: true,
    startTrial: () => {
        return "Trial started";
    },
    getCoupon: (name: "John", off: 10) => {
        return 10;
    }

};

//Inheritance in interfaces

interface Admin extends Userinterface {
    role: "admin" | "ta" | "learner"; //role can be one of these three values
}   

const learner: Admin = {
    db_id: 1,
    email: "learner@example.com",
    userId: 1,
    isActive: true,
    role: "learner",
    startTrial: () => {
        return "Trial started";
    },
    getCoupon: (name: "John", off: 10) => {
        return 10;
    }

};

export {};
// learner.db_id = 5; //Error: Cannot assign to 'db_id' because it is a read-only property.
console.log(learner);   

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user1 = {
    db_id: 22,
    email: "john.doe@example.com",
    userId: 1,
    isActive: true,
    startTrial: function () {
        return "Trial started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
var learner = {
    db_id: 1,
    email: "learner@example.com",
    userId: 1,
    isActive: true,
    role: "learner",
    startTrial: function () {
        return "Trial started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
// learner.db_id = 5; //Error: Cannot assign to 'db_id' because it is a read-only property.
console.log(learner);

//Model is the business layer
// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");
const dbName = "burgers";

let burgerModel = {
    all: (cb) => {
        orm.all(dbName, (res) => {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: (cols, vals, cb) => {
        orm.create(dbName, cols, vals, (res) => {
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.update(dbName, objColVals, condition, (res) => {
            cb(res);
        });
    },
    delete: (condition, cb) => {
        orm.delete(dbName, condition, (res) => {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgerModel;

// Controller is mostly setting the routes

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgerModel = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("*", (req, res) => {
    burgerModel.all((data) => {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burgerModel.create([
        "name", "devoured"
    ], [
        req.body.name, false
    ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgerModel.update({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;

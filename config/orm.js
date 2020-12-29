const connection = require("../config/connection.js");

const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput;

        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        const queryString = "INSERT INTO burgers (burger_name) VALUES (?)";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        const queryString = "UPDATE burgers SET ? WHERE ?";

        console.log(queryString);

        connection.query(queryString, [objColVals, condition], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;

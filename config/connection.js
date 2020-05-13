// Set up MySQL connection.
const mysql = require("mysql");
require("dotenv").config();

/** This object represents the default database configuration */
const config = {
    port: process.env.MYSQL_PORT,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
};

/** Check for process.env.JAWSDB_URL first since this app is hosted on heroku */
const connection = mysql.createConnection(process.env.JAWSDB_URL || config);

// Make connection.
connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
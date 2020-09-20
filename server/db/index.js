const mysql = require("mysql");

// connecting Database
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "myway",
    multipleStatements: true
});


module.exports = mysqlConnection

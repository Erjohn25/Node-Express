/* ┏━━━━━━━━━━━━━━━━━━━━━━━━━━┓
   ┃  My SQL Database Config  ┃
   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━┛ */
const mysql = require("mysql");
const dbConfig = {
	host: "localhost",
	user: "root",
	port: 3306,
	password: "",
	database: "taskdb",
};

module.exports = mysql.createConnection(dbConfig);

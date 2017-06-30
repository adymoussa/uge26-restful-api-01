
const mysql = require ("mysql2");

module.exports = {

	connect: function () {
		return mysql.createConnection ({
			host: "localhost",
			user: "root",
			password: "",
			database: "uge26_restful_api_01"
		});
	}

}
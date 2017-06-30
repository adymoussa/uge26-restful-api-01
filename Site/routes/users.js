
const path  = require ("path");
const mysql = require (path.join (__dirname, "..", "config", "mysql"));
const db    = mysql.connect ();
const User  = require (path.join (__dirname, "..", "services", "users"));

module.exports = function (app) {

	// ===========================================================
	// :: Routes


	// ---------------------------------------
	// :: Get user by name

	app.get ("/users/:username", function (request, response, next) {
		// response.send (request.params);

		const status_execute = db.execute ("SELECT id, username FROM users", function (error, rows, fields) {
			if (error) {
				console.log (error.message);
				response.send (404);
				return;
			}
			response.send (200, rows);

			// console.log ("Rows: ");
			// console.log (rows);
		});
		

		// response.send ([
		// 	{
		// 		"username" : "amo",
		// 		"fornavn"  : "Ady",
		// 		"efternavn": "Moussa"
		// 	},
			
		// 	{
		// 		"username" : "fm",
		// 		"fornavn"  : "Funky",
		// 		"efternavn": "Monkey"
		// 	}
		// ]);

	});


	// ---------------------------------------
	// :: Create user

	app.post ("/users", function (request, response, next) {
		response.send (201, request.params);
	});

	// ---------------------------------------
	// :: Put user

	app.put ("/users", function (request, response, next) {
		response.send (405);
	});

	// ---------------------------------------
	// :: Patch user

	app.patch ("/users", function (request, response, next) {
		response.send (405);
	});

	// ---------------------------------------
	// :: Delete user

	app.del ("/users", function (request, response, next) {
		response.send (405);
	});

};
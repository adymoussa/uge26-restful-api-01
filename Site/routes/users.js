
const path  = require ("path");
// const mysql = require (path.join (__dirname, "..", "config", "mysql"));
// const db    = mysql.connect ();
const User  = require (path.join (__dirname, "..", "services", "users"));

module.exports = function (app) {

	// ===========================================================
	// :: Routes


	// ---------------------------------------
	// :: Get all users

	app.get ("/users", function (request, response, next) {
		
		console.log ("Ady --- Route GET: /users");

		let user = new User ();

		user.getAll (function (error, result) {
			if (error) {
				console.error (error.message);
				response.send (404);
				return;
			}

			response.send (result);
		});

	});


	// ---------------------------------------
	// :: Get user by name

	app.get ("/users/:username", function (request, response, next) {
		
		let user = new User ();

		user.getOne (request.params.username, function (error, result) {
			if (error) {
				console.error (error.message);
				response.send (404);
				return;
			}
			
			console.log ("OK - getOne");
			response.send (result);
		});

		response.end();

	});


	// ---------------------------------------
	// :: Create user

	app.post ("/users", function (request, response, next) {
		
		console.log ("Ady --- Route POST: /users");

		let user = new User ();

		user.create (request.params, function (error, result) {
			if (error) {
				console.error (error.message);
				response.send (400);
				return;
			}
			
			response.send (201, result);
		});
		
		// response.send (201, request.params);
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



// :: Class User

	// :: Get All
	// :: Get One
	// :: Create



// ===========================================================
// :: Dependencies

const path  = require ("path");
const mysql = require (path.join (__dirname, "..", "config", "mysql"));
const db    = mysql.connect ();


// ===========================================================
// :: Class User

class User {

	// ---------------------------------------
	// :: Get All

	getAll (next) {
		db.execute (`
			SELECT id, username, password
			FROM users
		`, function (error, rows) {
			if (error) return next (error);
			next (null, rows);
		});
	}

	// ---------------------------------------
	// :: Get One

	getOne (username, next) {
		db.execute (`
			SELECT id, username, password
			FROM users
			WHERE username = ?
		`, [username]

		, function (error, rows) {
			if (error) return next (error);
			next (null, rows);
		});
	}

	// ---------------------------------------
	// :: Create

	create (values, next) {
		db.execute (
			`
				INSERT INTO users
				SET
					username = ?,
					password = ?
			`,
			[values.username, values.password],

			function (error, result) {
				if (error) return next (error);
				next (null, result);
			}
	)}

}

module.exports = User;
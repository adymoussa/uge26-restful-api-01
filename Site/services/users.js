
const path  = require ("path");
// const mysql = require (path.join (__dirname, "..", "config", "mysql"));
// const db    = mysql.connect ();


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
			next (null, nrows);
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
			next (null, nrows);
		});
	}

}

module.exports = User;
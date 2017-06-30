


module.exports = function (app) {

	// ===========================================================
	// :: Routes


	// ---------------------------------------
	// :: Get user by name

	app.get ("/users/:name", function (request, response, next) {
		// response.send (request.params);

		response.send ([
			{
				"username" : "amo",
				"fornavn"  : "Ady",
				"efternavn": "Moussa"
			},
			
			{
				"username" : "fm",
				"fornavn"  : "Funky",
				"efternavn": "Monkey"
			}
		]);

	});


	// ---------------------------------------
	// :: Create user

	app.post ("/users", function (request, response, next) {
		response.send (201, request.params);
	});

};
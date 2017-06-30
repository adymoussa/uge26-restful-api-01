


module.exports = function (app) {

	// ===========================================================
	// :: Routes

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

};



module.exports = function (app) {

	// ===========================================================
	// :: Routes

	app.get ("/users/:name", function (request, response, next) {
		response.send (request.params);
	});

};
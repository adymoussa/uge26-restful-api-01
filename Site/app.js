
// ===========================================================
// :: Dependencies

const restify = require ("restify");
const logger  = require ("morgan");
const path    = require ("path");

const app = restify.createServer ({
	name: "RESTful API Demo",
	version: "0.0.1"
});


// ===========================================================
// :: Config / Middleware

const port = process.env.PORT || 3000;


// :: Logger
app.use (logger("dev"));


// ===========================================================
// :: Modules

require (path.join (__dirname, "routes", "index"))(app);


// ===========================================================
// :: Listen

app.listen (port, function () {
	console.log ("The server is listening on port " + port);
});

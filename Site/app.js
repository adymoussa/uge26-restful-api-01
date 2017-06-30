
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

// :: Port
const port = process.env.PORT || 3000;

// :: Logger
app.use (logger("dev"));

// :: Restify
app.use (restify.acceptParser (app.acceptable));
app.use (restify.queryParser()); // URL
app.use (restify.bodyParser()); // F.eks. Form data


// ===========================================================
// :: Modules

require (path.join (__dirname, "routes", "index"))(app);


// ===========================================================
// :: Listen

app.listen (port, function () {
	console.log ("The server is listening on port " + port);
});

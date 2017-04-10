var express = require('express');
var app = express();

//Mount body-parser to parse URL encoded data and json data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Mount cookie parser
var cookieParser = require('cookie-parser');
app.use(cookieParser())

app.set('port', (process.env.PORT || 8081));

app.set('view engine', 'ejs');


// request date logger middleware
app.use(function(req, res, next){
	console.log("A new request received at " + Date.now());
	next();
});


// App level error handling middleware.
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('This is the App-level error handling middleware. Something broke!')
});

// Require router module
var myrouter = require('./routing.js');

// Requests on / handles by the routing router
app.use('/', myrouter);


var server = app.listen(app.get('port'), function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

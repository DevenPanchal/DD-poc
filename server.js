var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8081));
app.set('view engine', 'ejs');

// Requests on / handles by the routing router
app.use('/', routing);

var server = app.listen(app.get('port'), function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

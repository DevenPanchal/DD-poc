var express = require('express');
var router = express.Router();


// Handle "Hello World" on the homepage
router.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.sendFile( __dirname + "/" + "index.htm" );
})

// Handle POST request for the homepage
router.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST not available here');
})


// Handle GET request for the /list_user page.
router.get('/list_users', function (req, res) {
   console.log("Got a GET request for /list_users");
   res.send('Page Listing');
})


// Handle DELETE request for the /del_user page.
router.delete('/delete_user', function (req, res) {
   console.log("Got a DELETE request for /delete_user");
   res.send('Hello DELETE');
})


//Send static files when queried

router.use(express.static('public'));

router.get('/options.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "options.htm" );
})


//Handle form input
router.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

//Handle file upload
router.post('/file_upload', function (req, res) {
   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);
   var file = __dirname + "/" + req.files.file.name;
   
   fs.readFile( req.files.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.files.file.name
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
})

//Dynamic url no regex
router.get('/:req.query.first_name:req.query.last_name', function(req,res){
res.send ('Hi '+ req.query.first_name + ' ' + 'req.query.last_name.'+ ' This is your page');})


//Handle invalid urls
router.get('*', function(req,res){
res.send ('Invalid URL for DD');
})

module.exports = router;
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express()

// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested With, Content-Type, Accept');
    next();
 });
//solve the bodyparser stream issues
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json({limit:'50mb'}));

 app.use('/', function(req, res) {  
    var url = req.url.replace('/?target=','');
    req.pipe(request(url)).pipe(res);
  });


app.listen(3000, () => console.log('Example app listening on port 3000!'))

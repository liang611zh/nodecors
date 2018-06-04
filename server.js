const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express()
// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested With, Content-Type, Accept');
    next();
 });

 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json({limit:'50mb'}));

 app.use('/', function(req, res) {  
    var url = req.url.replace('/?url=','');
    req.pipe(request(url)).pipe(res);

  });

  
//  const url='http://www.pjliaing.com/json/list.json'
  // POST method route
app.post('/post', function (req, res) {
    res.send('POST request to the homepage')
  })
app.listen(3000, () => console.log('Exampl e app listening on port 3000!'))
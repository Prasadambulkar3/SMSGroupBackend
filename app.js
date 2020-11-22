var express = require('express');
var bodyParser = require('body-parser');


var app = express();

var port = process.env.port || 3300

app.listen(port, () => {
    console.log("Hi This port is running", port);
});

app.use(function (req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');  
    next();  
    });
    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = require('./routes')();
 
app.use('/api', router);


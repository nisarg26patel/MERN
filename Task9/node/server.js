require('./db');
//ignore or disable https (SSL)
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] ='0';
const express = require ("express")
const path = require ("path")
const bodyParser = require ('body-parser')

const userController = require('./controllers/userController');
var session = require('express-session');
var app = express();

app.use(bodyParser.urlencoded(
    {
        extended: true
    }));
    app.use(bodyParser.urlencoded());
    app.set('views',path.join(__dirname,'/views/'));

    app.locals.serverpath="mongodb://localhost:27017";
    app.locals.appversion="2.0";
    app.locals.devprod="dev";

    app.locals.dbname="Data"; //"testdb";//"llsarvoday";
    app.set('view engine','ejs');
    app.listen(1081, () =>{
         console.log("express server started at port : 1081");

    });

    app.use('/',userController);
    app.use('/user',userController);
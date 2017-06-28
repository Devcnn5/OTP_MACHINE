var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');

var addone = require('./routes/addone');
var table=require('./routes/table');
var sendmsg=require('./routes/send');
var messaging=require('./routes/messaging');
var checkDuplicate=require('./routes/checkDuplicate');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.use('/addone',addone);
app.use('/',table);
app.use('/sendmsg',sendmsg);
app.use('/messaging',messaging);
app.use('/checkDuplicate',checkDuplicate);

app.set('port', 3000);

app.use(express.static(path.join(__dirname, '')));


var server = app.listen(process.env.PORT || app.get('port'), function() {
  var port = server.address().port;
  console.log('Server on port :' + port);
});

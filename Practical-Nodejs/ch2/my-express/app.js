#!/usr/bin/env node
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http=require('http');
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('appName','Mike-Express-App');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.all('*',function(req,res){
  res.send('Hello world to all unhandled requests');
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: app.get('appName')
  });
});
var server = http.createServer(app)

if(require.main==module){
  server.listen(app.get('port'),function(err){
    if(err){
      throw err;
    }else{
      console.log('Express app is running under:port=%s',app.get('port'));
    }
  });
}
var test_server 
var boot=function(){
  test_server=http.createServer(app);
  test_server.listen(9000,function(err){
     console.log('Express app is running under:port=9000');
  });
}
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
var shutdown=function(){
  test_server.close();
}

exports.boot=boot;
exports.shutdown=shutdown;
exports.port=app.get('port');
// module.exports = app;

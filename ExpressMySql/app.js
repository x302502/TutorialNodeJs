var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/routes/web');
var apiRouter = require('./src/routes/api');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api',apiRouter);

// 404 htpp
app.all('*', function(req, res) {
    res.json({
      statusCode: 400,
      message: 'not.exists'
    })
});

module.exports = app;

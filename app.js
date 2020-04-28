const dotenv = require('dotenv');
dotenv.config();

const createError = require('http-errors');
const express = require('express');
const session = require ('express-session');
const router = require('./app/router');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'new secret connexion'
}));

const userMiddleware = require('./app/middlewares/user');
app.use(userMiddleware);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'client/globalapp/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/globalapp/build', 'index.html'));
});

app.use(router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;

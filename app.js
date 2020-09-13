const express = require('express');
const router = require('./routes');
const AppError = require('./utils/appError');
const errorHandler = require('./controllers/errorController');

const app = express();

app.use(express.json());
app.use('/', router);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandler);

module.exports = app;
const express = require('express');
const router = require('./routes');
const AppError = require('./utils/appError');
const errorHandler = require('./controllers/errorController');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const app = express();

app.use(cors());
app.options('*', cors());

app.use(helmet());

const limiter = rateLimit({
  max: 600,
  windowMs: 30 * 60 * 1000,
  message: 'Too many requests from this IP, try again in 30 minutes',
});

app.use('/api', limiter);

app.use(express.json({ limit: '20kb' }));

app.use(mongoSanitize());

app.use(xss());

app.use('/', router);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandler);

module.exports = app;

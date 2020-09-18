const User = require('../models/userModel');
const catchAsyncError = require('../utils/catchAsyncError');
const AppError = require('../utils/appError');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const signAccessToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
  });
};

exports.signupUser = catchAsyncError(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = signAccessToken(newUser._id);

  res.status(201).json({
    status: 'success',
    message: 'Sign up successful',
    access_token: token,
  });
});

exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Provide email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.comparePasswords(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  const token = signAccessToken(user._id);

  res.status(200).json({
    status: 'success',
    access_token: token,
  });
});

exports.protect = catchAsyncError(async (req, res, next) => {
  let token;
  let authHeaders = req.headers.authorization;
  if (authHeaders && authHeaders.startsWith('Bearer')) {
    token = authHeaders.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('Log in to get access', 401));
  }

  const decoded = await promisify(jwt.verify)(
    token,
    process.env.ACCESS_TOKEN_SECRET
  );

  const user = await User.findById(decoded.id);

  if (!user) {
    return next(new AppError('User does not exist', 401));
  }

  if (user.changedPswAfterJWTIssue(decoded.iat)) {
    return next(new AppError('Your session has expired. Please log in.', 401));
  }

  req.user = user;

  next();
});

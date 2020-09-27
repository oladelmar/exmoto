const User = require('../models/userModel');
const catchAsyncError = require('../utils/catchAsyncError');

exports.getAllUsers = catchAsyncError(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getUser = (req, res) => {
  res.status(200).json({
    message: 'Route not implemented yet',
  });
};

exports.updateUser = (req, res) => {
  res.status(200).json({
    message: 'Route not implemented yet',
  });
};

exports.deleteUser = (req, res) => {
  res.status(200).json({
    message: 'Route not implemented yet',
  });
};

const mongoose = require('mongoose');
// const validator = require('validator');
const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Confirm the password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Password and password confirm do not match',
    },
  },
  passwordChangedAt: Date,
  name: {
    type: String,
    unique: true,
  },
  accessToken: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
  userRole: {
    type: String,
    enum: ['operator', 'admin', 'superadmin'],
    default: 'operator',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.comparePasswords = async function (
  incomingPassword,
  userPassword
) {
  return await bcrypt.compare(incomingPassword, userPassword);
};

userSchema.methods.changedPswAfterJWTIssue = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000);

    return changedTimestamp > JWTTimestamp;
  }

  return false;
};

const User = mongoose.model('User', userSchema);

module.exports = User;

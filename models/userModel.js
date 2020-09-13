const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Provide a valid email'],
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
  name: {
    type: String,
    required: [true, 'Username is required'],
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
    required: [true, 'User role is required'],
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

const User = mongoose.model('User', userSchema);

module.exports = User;

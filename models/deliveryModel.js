const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  trackingNumber: {
    type: String,
    required: [true, 'Tracking number is required'],
    unique: true,
    trim: true,
  },
  fromCountry: {
    type: String,
    required: [true, 'Country of origin is required'],
    default: 'Moldova',
    trim: true,
  },
  fromCity: {
    type: String,
    required: [true, 'City of origin is required'],
    trim: true,
  },
  toCountry: {
    type: String,
    required: [true, 'Destination country is required'],
    trim: true,
  },
  toCity: {
    type: String,
    required: [true, 'Destination city is required'],
    trim: true,
  },
  estimatedDeliveryDate: Date,
  delivered: {
    type: Boolean,
    default: false,
  },
  recipient: {
    type: String,
    trim: true,
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

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;

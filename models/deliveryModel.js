const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  trackingNumber: {
    type: String,
    required: [true, 'Tracking number is required'],
    unique: true,
  },
  fromCountry: {
    type: String,
    required: [true, 'Country of origin is required'],
    default: 'Moldova',
  },
  fromCity: {
    type: String,
    required: [true, 'City of origin is required'],
  },
  toCountry: {
    type: String,
    required: [true, 'Destination country is required'],
  },
  toCity: {
    type: String,
    required: [true, 'Destination city is required'],
  },
  estimatedDeliveryDate: Date,
  delivered: {
    type: Boolean,
    default: false,
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

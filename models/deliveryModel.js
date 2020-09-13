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
  weight: {
    type: Number,
    required: [true, 'Weight is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  priceCurrency: {
    type: String,
    required: [true, 'Price currency is required'],
    default: 'MDL',
  },
  deliveryType: String,
  receivedDate: {
    type: Date,
    required: [true, 'Received date is required'],
  },
  estimatedDeliveryDate: Date,
  deliveredDate: Date,
  paid: {
    type: Boolean,
    default: false,
  },
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

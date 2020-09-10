const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  trackingNumber: {
    type: String,
    required: true,
    unique: true,
  },
  fromCountry: {
    type: String,
    required: true,
    default: 'Moldova',
  },
  fromCity: {
    type: String,
    required: true,
  },
  toCountry: {
    type: String,
    required: true,
  },
  toCity: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  priceCurrency: {
    type: String,
    default: 'MDL',
  },
  paid: {
    type: Boolean,
    default: false,
  },
  deliveryType: String,
  acceptedDate: {
    type: Date,
  },
  deliveredDate: Date,
  accepted: {
    type: Boolean,
  },
  delivered: {
    type: Boolean,
    default: false,
  },
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;

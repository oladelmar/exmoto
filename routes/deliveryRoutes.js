const express = require('express');
const deliveryController = require('../controllers/deliveryController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, deliveryController.getDeliveries)
  .post(authController.protect, deliveryController.createDelivery);

router
  .route('/:trackingNumber')
  .get(deliveryController.getDelivery)
  .patch(authController.protect, deliveryController.updateDelivery)
  .delete(authController.protect, deliveryController.deleteDelivery);

module.exports = router;

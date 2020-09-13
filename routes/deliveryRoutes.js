const express = require('express');
const deliveryController = require('../controllers/deliveryController');

const router = express.Router();

router
  .route('/')
  .get(deliveryController.getDeliveries)
  .post(deliveryController.createDelivery);

router
  .route('/:trackingNumber')
  .get(deliveryController.getDelivery)
  .patch(deliveryController.updateDelivery)
  .delete(deliveryController.deleteDelivery);

module.exports = router;

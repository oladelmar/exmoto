const express = require('express');
const priceController = require('../controllers/priceController');

const router = express.Router();

router
  .route('/')
  .get(priceController.getAllPrices)
  .post(priceController.createPrice);

router
  .route('/:id')
  .get(priceController.getPrice)
  .patch(priceController.updatePrice)
  .delete(priceController.deletePrice);

module.exports = router;

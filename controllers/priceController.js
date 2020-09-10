const Price = require('../models/priceModel');

exports.getAllPrices = async (req, res) => {
  res.status(200).json({
    message: 'Route not implemented yet',
  });
  // try {
  //   const prices = await Price.find();

  //   if (!prices) {
  //     return res.status(404).json({
  //       status: 'fail',
  //       message: 'No prices found',
  //     });
  //   }

  //   res.status(200).json({
  //     status: 'success',
  //     data: {
  //       prices,
  //     },
  //   });
  // } catch (err) {
  //   res.status(400).json({
  //     status: 'fail',
  //     message: err,
  //   });
  // }
};

exports.getPrice = (req, res) => {
  res.status(200).json({
    message: 'Route not implemented yet',
  });
};

exports.createPrice = (req, res) => {
  res.status(200).json({
    message: 'Route not implemented yet',
  });
};

exports.updatePrice = (req, res) => {
  res.status(200).json({
    message: 'Route not implemented yet',
  });
};

exports.deletePrice = (req, res) => {
  res.status(200).json({
    message: 'Route not implemented yet',
  });
};

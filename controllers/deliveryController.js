const Delivery = require('../models/deliveryModel');

exports.getDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find();

    res.status(200).json({
      status: 'success',
      results: deliveries.length,
      data: {
        deliveries,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getDelivery = async (req, res) => {
  try {
    const id = req.params.id;

    const delivery = await Delivery.findOne({ trackingNumber: id });

    if (!delivery) {
      return res.status(404).json({
        status: 'fail',
        message: 'Delivery with this ID is not registered in the system',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        delivery,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createDelivery = async (req, res) => {
  try {
    // const trackingNumber = 'x' + Math.floor(Math.random() * 10000);
    // const newDelivery = await Delivery.create({ trackingNumber, ...req.body });
    const newDelivery = await Delivery.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        delivery: newDelivery,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateDelivery = async (req, res) => {
  try {
    const delivery = await Delivery.findOneAndUpdate(
      { trackingNumber: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: 'success',
      data: {
        delivery,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteDelivery = (req, res) => {
  res.status(200).json({
    message: 'Route not implemented yet',
  });
};

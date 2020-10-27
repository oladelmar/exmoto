const Delivery = require('../models/deliveryModel');
const AppError = require('../utils/appError');
const catchAsyncError = require('../utils/catchAsyncError');

exports.getDeliveries = catchAsyncError(async (req, res, next) => {
  const deliveries = await Delivery.find();

  res.status(200).json({
    status: 'success',
    results: deliveries.length,
    data: {
      deliveries,
    },
  });
});

exports.getDelivery = catchAsyncError(async (req, res, next) => {
  const trackingNumber = req.params.trackingNumber;

  const delivery = await Delivery.findOne({ trackingNumber: trackingNumber });

  if (!delivery) {
    return next(
      new AppError('Delivery with this tracking number is not found', 404)
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      delivery,
    },
  });
});

exports.createDelivery = catchAsyncError(async (req, res, next) => {
  const newDelivery = await Delivery.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      delivery: newDelivery,
    },
  });
});

exports.updateDelivery = catchAsyncError(async (req, res, next) => {
  const delivery = await Delivery.findOneAndUpdate(
    { trackingNumber: req.params.trackingNumber },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!delivery) {
    return next(
      new AppError('Delivery with this tracking number is not found', 404)
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      delivery,
    },
  });
});

exports.deleteDelivery = catchAsyncError(async (req, res, next) => {
  const delivery = await Delivery.findOneAndDelete({
    trackingNumber: req.params.trackingNumber,
  });

  if (!delivery) {
    return next(
      new AppError('Delivery with this tracking number is not found', 404)
    );
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

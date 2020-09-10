const { Router } = require('express');

const deliveryRouter = require('./deliveryRoutes');
const priceRouter = require('./priceRoutes');
const userRouter = require('./userRoutes');

const router = Router();

router.use('/api/v1/prices', priceRouter);
router.use('/api/v1/deliveries', deliveryRouter);
router.use('/api/v1/users', userRouter);

module.exports = router;

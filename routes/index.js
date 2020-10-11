const { Router } = require('express');

const deliveryRouter = require('./deliveryRoutes');
const priceRouter = require('./priceRoutes');
const userRouter = require('./userRoutes');
const emailRouter = require('./emailRoutes');

const router = Router();

router.use('/api/v1/prices', priceRouter);
router.use('/api/v1/deliveries', deliveryRouter);
router.use('/api/v1/users', userRouter);
router.use('/api/v1/emails', emailRouter);

module.exports = router;

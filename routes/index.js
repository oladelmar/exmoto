const { Router } = require('express');

const deliveryRouter = require('./deliveryRoutes');
const userRouter = require('./userRoutes');
const emailRouter = require('./emailRoutes');

const router = Router();

router.use('/deliveries', deliveryRouter);
router.use('/users', userRouter);
router.use('/emails', emailRouter);

module.exports = router;

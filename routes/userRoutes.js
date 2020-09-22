const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signupUser);
router.post('/login', authController.loginUser);

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'superadmin'),
    userController.getAllUsers
  );

router
  .route('/:id')
  .get(authController.protect, userController.getUser)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'superadmin'),
    userController.updateUser
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'superadmin'),
    userController.deleteUser
  );

module.exports = router;

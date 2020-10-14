const Email = require('../utils/email');
const AppError = require('../utils/appError');
const catchAsyncError = require('../utils/catchAsyncError');

exports.sendEmailToSupport = catchAsyncError(async (req, res, next) => {
  const subject = req.body.subject || 'CONTACT_US';
  const username = req.body.username;
  const email = req.body.email;
  const phone = req.body.phone || null;
  const organization = req.body.organization || null;
  const deliveryAddress = req.body.deliveryAddress || null;
  const deliveryType = req.body.deliveryType === 'documents' ? 'documents' : req.body.deliveryType === 'package' ? 'package' : null;
  const weight = req.body.weight || null;
  const message = req.body.message || 'A user wants to request a delivery or contact us';

  if (subject === 'REQUEST_DELIVERY') {
    await new Email().sendRequestDelivery(`
      ИМЯ: ${username}
      EMAIL: ${email}
      ТЕЛЕФОН: ${phone}
      ОРГАНИЗАЦИЯ: ${organization}
      АДРЕС ДОСТАВКИ: ${deliveryAddress}
      ТИП ОТПРАВЛЕНИЯ: ${deliveryType}
      ВЕС: ${weight}
      КОММЕНТАРИИ: ${message}
    `);
  } else if (subject === 'CONTACT_US') {
    await new Email().sendContactUs(`
      ИМЯ: ${username}
      EMAIL: ${email}      
      СООБЩЕНИЕ: ${message}
    `);
  } else {
    return next(new AppError('Upsupported email subject', 400));
  }

  res.status(200).json({
    status: 'success',
    message: 'Email has been sent to exmoto support'
  });
});

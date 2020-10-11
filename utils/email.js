const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

module.exports = class Email {
  constructor() {
    this.to = process.env.SUPPORT_EMAIL;
    this.from = process.env.FROM_EMAIL;
  }

  createOurTransport() {
    if (process.env.NODE_ENV === 'production') {      
      return nodemailer.createTransport(
        nodemailerSendgrid({
          apiKey: process.env.SENDGRID_PASSWORD
        })
      );
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }

  async send(subject, message) {
    // 1. define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      text: message,
    };

    // 2. create a transport and send email
    await this.createOurTransport().sendMail(mailOptions);
  }

  async sendContactUs(message) {
    await this.send(`СООБЩЕНИЕ ОТ ПОЛЬЗОВАТЕЛЯ с сайта exmoto.md`, message);
  }

  async sendRequestDelivery(message) {
    await this.send(`ЗАКАЗ КУРЬЕРА с сайта exmoto.md`, message);
  }
};

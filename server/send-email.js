const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    secure: true, // use SSL
    port: 465,
    auth: {
      user: 'noreply@antonstrickland.com',
      pass: process.env.NODEMAILER
    }
});

module.exports = function sendEmail(to, subject, message) {
    const mailOptions = {
        from: 'noreply@antonstrickland.com',
        to,
        subject,
        html: message,
    };

    return new Promise(function(resolve, reject) {
      transport.sendMail(mailOptions, (error, info) => {
          if (error) {
              reject(error);
          } else {
            resolve(info);
          }
      });
    });
};

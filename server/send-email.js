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
    console.log("SENDING MAIL");
    transport.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        }
    });
    console.log("SENT!");
};

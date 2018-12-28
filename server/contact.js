const sendEmail = require('./send-email');

sendEmail(process.env.MAIL_ADDRESS, 'Test subject', 'Test message');

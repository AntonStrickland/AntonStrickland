const express = require('express');
const next = require('next');

const bodyparser = require('body-parser');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();

const sendEmail = require('./send-email');

app.prepare().then(() => {
  const server = express();

  server.use(bodyparser.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.post('/contact', function (req, res) {
    const message = req.body.email + "\n\n" + req.body.name +"\n\n" + req.body.message;
    sendEmail(process.env.MAIL_ADDRESS, req.body.subject, message);
  });

  server.listen(PORT, err => {
    if (err) throw err;
    console.log("> Ready on ${PORT}");
  });

})
.catch(ex => {
  console.error(ex.stack);
  process.exit(1);
});

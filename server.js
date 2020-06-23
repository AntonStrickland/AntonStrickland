//import { Router } from '/server/routes';

const express = require('express');
const bodyparser = require('body-parser');
const next = require('next')

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const sendEmail = require('./server/send-email');


app.prepare().then(() => {
  const server = express()
  
  server.get('/resume', (req, res) => {
    const targetUrl = 'https://drive.google.com/file/d/1AvaQ0JfBqH3lgQiqG9Xht7-aVzF-HCHy/view?usp=sharing';
    res.redirect(targetUrl);
    return handle(req, res)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })
  
  server.use(bodyparser.json());
  

  server.post('/contact', async function (req, res) {
    const message = req.body.email + "\n\n" + req.body.name +"\n\n" + req.body.message;

    try {
      await sendEmail(process.env.MAIL_ADDRESS, req.body.subject, message);
      res.status(204).send();
    }catch (e) {
      console.error(e);
      res.status(500).send();
    }

  });
  
  server.post('/thank-you', async function (req, res) {

	console.log("thank you!")
	
	try {
      //Router.replaceRoute(`/thank-you`);
      res.status(204).send();
    }catch (e) {
      console.error(e);
      res.status(500).send();
    }

  });
  
  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})

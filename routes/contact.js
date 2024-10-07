const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

// Route to handle GET request to show the contact form
router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});

// Route to handle POST request when form is submitted
router.post('/contactus', (req, res, next) => {
  console.log(req.body); // You can access name and email here
  res.redirect('/success'); // Redirecting to the success page
});

// Route to display success message
router.get('/success', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'success.html'));
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  res.send('Shop Products Page');
});

// Add more routes for the shop as needed

module.exports = router;

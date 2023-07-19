const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importing routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Routes
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

// 404 page not found middleware
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

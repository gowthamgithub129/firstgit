const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// GET route to display the form
app.get('/add-product', (req, res) => {
  res.send(`
    <form action="/add-product" method="POST">
      <input type="text" name="productName" placeholder="Product Name">
      <input type="text" name="productSize" placeholder="Product Size">
      <button type="submit">Submit</button>
    </form>
  `);
});

// POST route to handle form submission
app.post('/add-product', (req, res) => {
  const productName = req.body.productName;
  const productSize = req.body.productSize;
  console.log(`Product Name: ${productName}`);
  console.log(`Product Size: ${productSize}`);
  res.send('Product added successfully!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

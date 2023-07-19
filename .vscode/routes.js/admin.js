const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res) => {
  res.send(`
    <form action="/admin/add-product" method="post">
      <label for="product-name">Product Name:</label>
      <input type="text" id="product-name" name="productName">

      <label for="product-size">Product Size:</label>
      <input type="text" id="product-size" name="productSize">

      <button type="submit">Add Product</button>
    </form>
  `);
});

router.post('/add-product', (req, res) => {
  const { productName, productSize } = req.body;
  console.log('Product Name:', productName);
  console.log('Product Size:', productSize);
  res.redirect('/shop/products'); // Redirect to the shop route or any other appropriate page
});

module.exports = router;

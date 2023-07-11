// Define the initial list of products
const products = [
    { itemName: 'Pen', description: 'Blue ballpoint pen', price: 1.99, quantity: 50 },
    { itemName: 'Notebook', description: 'College-ruled notebook', price: 3.99, quantity: 20 },
    { itemName: 'Pencil', description: 'HB graphite pencil', price: 0.99, quantity: 30 }
  ];
  
  // Function to display the products on the screen
  function displayProducts() {
    // Clear the existing content
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
  
    // Loop through the products and create HTML elements to display each product
    products.forEach((product, index) => {
      const productItem = document.createElement('div');
      productItem.className = 'product-item';
  
      const itemName = document.createElement('h3');
      itemName.textContent = product.itemName;
      productItem.appendChild(itemName);
  
      const description = document.createElement('p');
      description.textContent = product.description;
      productItem.appendChild(description);
  
      const price = document.createElement('p');
      price.textContent = 'Price: rupee' + product.price;
      productItem.appendChild(price);
  
      const quantity = document.createElement('p');
      quantity.textContent = 'Quantity: ' + product.quantity;
      productItem.appendChild(quantity);
  
      productList.appendChild(productItem);
    });
  }
  
  // Function to handle the form submission and add a new item
  function addItem(event) {
    event.preventDefault();
  
    // Get the values from the form
    const itemNameInput = document.getElementById('item-name');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price');
    const quantityInput = document.getElementById('quantity');
  
    const itemName = itemNameInput.value;
    const description = descriptionInput.value;
    const price = parseFloat(priceInput.value);
    const quantity = parseInt(quantityInput.value);
  
    // Create a new product object
    const newProduct = { itemName, description, price, quantity };
  
    // Add the new product to the list
    products.push(newProduct);
  
    // Clear the form inputs
    itemNameInput.value = '';
    descriptionInput.value = '';
    priceInput.value = '';
    quantityInput.value = '';
  
    // Refresh the displayed products
    displayProducts();
  }
  
  // Add event listener to the form submit button
  const addItemForm = document.getElementById('add-item-form');
  addItemForm.addEventListener('submit', addItem);
  
  // Display the initial products on page load
  displayProducts();
  
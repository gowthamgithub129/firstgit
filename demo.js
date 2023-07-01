// Get the elements
const filterInput = document.getElementById('filter');
const itemList = document.getElementById('items');
const addForm = document.getElementById('addForm');
const itemInput = document.getElementById('item');
const descriptionInput = document.getElementById('description');

// Add item to the list
function addItem(event) {
  event.preventDefault();
  const itemName = itemInput.value.trim();
  const itemDescription = descriptionInput.value.trim();

  if (itemName !== '') {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `${itemName} - ${itemDescription}`;
    const deleteBtn = document

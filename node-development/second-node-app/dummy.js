const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Sample data stored in-memory
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Get all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Get a single item by ID
app.get('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((i) => i.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Create a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  newItem.id = items.length + 1;
  items.push(newItem);

  res.status(201).json(newItem);
});

// Update an existing item by ID
app.put('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;
  const index = items.findIndex((i) => i.id === itemId);

  if (index !== -1) {
    items[index] = { ...items[index], ...updatedItem };
    res.json(items[index]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Delete an item by ID
app.delete('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  items = items.filter((i) => i.id !== itemId);
  res.json({ message: 'Item deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

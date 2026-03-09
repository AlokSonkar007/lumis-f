const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const productsPath = path.join(__dirname, '../data/products.json');

app.get('/api/products', (req, res) => {
  const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
  res.json(products);
});

app.get('/api/products/featured', (req, res) => {
  const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
  res.json(products.filter(p => p.featured));
});

app.get('/api/products/:id', (req, res) => {
  const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

app.get('/api/products/category/:category', (req, res) => {
  const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
  res.json(products.filter(p => p.category.toLowerCase() === req.params.category.toLowerCase()));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

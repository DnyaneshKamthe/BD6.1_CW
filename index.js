const express = require('express');
const { resolve } = require('path');
const { getBooks, getBooksById, addBook } = require('./books');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/api/books', async (req, res) => {
  res.json(getBooks());
});

app.get('/api/books/:id', async (req, res) => {
  res.json(getBookById(id));
});

app.post('/api/books', async (req, res) => {
  let { newBook } = req.body;
  res.json(addBook(newBook));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

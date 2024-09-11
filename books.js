let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen' },
  { id: 4, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

function getBooks() {
  return books;
}

function getBooksById(id) {
  return books.find((book) => book.id === id);
}

function addBook(newBook) {
  let newBookData = { id: books.length + 1, ...newBook };
  books.push(newBookData);
  return newBookData;
}

module.exports = { getBooks, getBooksById, addBook };

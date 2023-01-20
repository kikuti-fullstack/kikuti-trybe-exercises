const { Book } = require('../models/index');

async function getAll() {
  const books = await Book.findAll();
  return books;
}

async function getById(id) {
  const book = await Book.findByPk(id);
  return book;
}

async function createNewBook(book) {
  const newBook = await Book.create({ ...book });
  return newBook;
}

module.exports = {
  getAll,
  getById,
  createNewBook,
};

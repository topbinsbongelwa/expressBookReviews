const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api/books';

// Get all books
async function getAllBooks() {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (err) {
    console.error('getAllBooks error:', err.message || err);
    throw err;
  }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
  try {
    const res = await axios.get(`${BASE_URL}/${encodeURIComponent(isbn)}`);
    return res.data;
  } catch (err) {
    console.error('getBookByISBN error:', err.message || err);
    throw err;
  }
}

// Get books by author
async function getBooksByAuthor(author) {
  try {
    const res = await axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`);
    return res.data;
  } catch (err) {
    console.error('getBooksByAuthor error:', err.message || err);
    throw err;
  }
}

// Get books by title
async function getBooksByTitle(title) {
  try {
    const res = await axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`);
    return res.data;
  } catch (err) {
    console.error('getBooksByTitle error:', err.message || err);
    throw err;
  }
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
};

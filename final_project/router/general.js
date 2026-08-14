const express = require('express');
const axios = require('axios');

const public_users = express.Router();

const BASE_URL = 'http://localhost:5000';


// Get all books
public_users.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({
      message: 'Error retrieving books'
    });
  }
});


// Get book by ISBN
public_users.get('/isbn/:isbn', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/isbn/${req.params.isbn}`);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(404).json({
      message: 'Book not found'
    });
  }
});


// Get books by author
public_users.get('/author/:author', async (req, res) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/author/${encodeURIComponent(req.params.author)}`
    );

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(404).json({
      message: 'Author not found'
    });
  }
});


// Get books by title
public_users.get('/title/:title', async (req, res) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/title/${encodeURIComponent(req.params.title)}`
    );

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(404).json({
      message: 'Title not found'
    });
  }
});


// Get book reviews
public_users.get('/review/:isbn', async (req, res) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/review/${req.params.isbn}`
    );

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(404).json({
      message: 'Book not found'
    });
  }
});

module.exports.general = public_users;
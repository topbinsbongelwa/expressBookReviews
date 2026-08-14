const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username) => {
//write code to check is the username is valid

  return users.some(user => user.username === username);
};



const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
 return users.some(user =>
    user.username === username && user.password === password
  );
};

// only registered users can login
regd_users.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (authenticatedUser(username, password)) {
    const accessToken = jwt.sign(
      { username: username },
      "secretkey",
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login successful",
      accessToken: accessToken
    });
  }

  return res.status(401).json({
    message: "Invalid username or password"
  });
});



//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  const username = req.body.username;
  const password = req.body.password;

  if (authenticatedUser(username, password)) {
    const accessToken = jwt.sign(
      { username: username },
      "secretkey",
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login successful",
      accessToken: accessToken
    });
  

  return res.status(401).json({
    message: "Invalid username or password"
  });
});


// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
   const isbn = req.params.isbn;
  const username = req.body.username;
  const review = req.body.review;

  if (!books[isbn]) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  books[isbn].reviews[username] = review;

  return res.status(200).json({
    message: "Review added successfully",
    reviews: books[isbn].reviews
  });
});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;

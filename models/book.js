const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the book card schema
const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: [{type: String, required: true}],
  description: String,
  image: {type: String, trim: true},
  link: {type: String, trim: true},
  date: { type: Date, default: Date.now } // used for sorting in booksController
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
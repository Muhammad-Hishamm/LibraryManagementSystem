const Book = require('../models/book.model');

exports.getAllBooks = (req, res) => {
  Book.getAll((err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

exports.createBook = (req, res) => {
  Book.create(req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

// Get book by ID
exports.getBookById = (req, res) => {
  Book.getById(req.params.id, (err, book) => {
    if (err) return res.status(500).send(err);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  });
};

// Update book by ID
exports.updateBook = (req, res) => {
  Book.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Book not found' });
    res.json({ id: req.params.id, ...req.body });
  });
};

// Delete book by ID
exports.deleteBook = (req, res) => {
  Book.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
    });
}

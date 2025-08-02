const Borrower = require('../models/borrower.model');

exports.getAllBorrowers = (req, res) => {
  Borrower.getAll((err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};


exports.createBorrower = (req, res) => {
  Borrower.create(req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

// Get borrower by ID
exports.getBorrowerById = (req, res) => {
  Borrower.getById(req.params.id, (err, borrower) => {
    if (err) return res.status(500).send(err);
    if (!borrower) return res.status(404).json({ message: 'Borrower not found' });
    res.json(borrower);
  });
};

// Update borrower by ID
exports.updateBorrower = (req, res) => {
  Borrower.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Borrower not found' });
    res.json({ id: req.params.id, ...req.body });
  });
};

// Delete borrower by ID
exports.deleteBorrower = (req, res) => {
  Borrower.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Borrower not found' });
    res.json({ message: 'Borrower deleted successfully' });
    });
}

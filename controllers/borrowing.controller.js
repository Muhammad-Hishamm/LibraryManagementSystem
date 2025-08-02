const Borrowing = require('../models/borrowing.model');

exports.borrow = (req, res) => {
  const { book_id, borrower_id } = req.body;
  const borrowed_date = new Date();
  const due_date = new Date();
  due_date.setDate(borrowed_date.getDate() + 14);

  Borrowing.borrowBook({ book_id, borrower_id, borrowed_date, due_date }, (err, result) =>
    err ? res.status(500).send(err) : res.status(201).json({ id: result.insertId }));
};

exports.returnBook = (req, res) => {
  Borrowing.returnBook(req.params.id, new Date(), (err) =>
    err ? res.status(500).send(err) : res.sendStatus(204));
};

exports.getOverdues = (req, res) => {
  Borrowing.getOverdues((err, result) =>
    err ? res.status(500).send(err) : res.json(result));
};

exports.getByBorrower = (req, res) => {
  Borrowing.getByBorrower(req.params.borrower_id, (err, result) =>
    err ? res.status(500).send(err) : res.json(result));
};


const { exportToCSV } = require('../utils/csvExporter');

exports.exportOverdueCSV = (req, res) => {
  Borrowing.getOverdues((err, data) => {
    if (err) return res.status(500).send(err);
    if (!data.length) return res.status(404).send('No overdue records.');
    exportToCSV('overdues.csv', data, res);
  });
};

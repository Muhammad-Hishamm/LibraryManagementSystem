const db = require('../config/db');

const Borrowing = {
  borrowBook: ({ book_id, borrower_id, borrowed_date, due_date }, cb) => {
    const sql = 'INSERT INTO borrowings (book_id, borrower_id, borrowed_date, due_date) VALUES (?, ?, ?, ?)';
    db.query(sql, [book_id, borrower_id, borrowed_date, due_date], cb);
  },

  returnBook: (id, returned_date, cb) => {
    const sql = 'UPDATE borrowings SET returned_date = ? WHERE id = ?';
    db.query(sql, [returned_date, id], cb);
  },

  getOverdues: cb => {
    const sql = 'SELECT * FROM borrowings WHERE returned_date IS NULL AND due_date < CURDATE()';
    db.query(sql, cb);
  },

  getByBorrower: (borrower_id, cb) => {
    const sql = 'SELECT * FROM borrowings WHERE borrower_id = ? AND returned_date IS NULL';
    db.query(sql, [borrower_id], cb);
  }
};

module.exports = Borrowing;

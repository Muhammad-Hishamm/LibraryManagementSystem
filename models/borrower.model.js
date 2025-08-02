const db = require('../config/db');

const Borrower  = {
    getAll: cb => db.query('SELECT * FROM borrowers', cb),

    getById: (id, cb) => db.query('SELECT * FROM borrowers WHERE id = ?', [id], cb),

    create: (borrower, cb) => db.query('INSERT INTO borrowers SET ?', borrower, cb),

    update: (id, borrower, cb) => db.query('UPDATE borrowers SET ? WHERE id = ?', [borrower, id], cb),

    delete: (id, cb) => db.query('DELETE FROM borrowers WHERE id = ?', [id], cb),
};

module.exports = Borrower;

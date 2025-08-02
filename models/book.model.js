const db = require('../config/db');

const Book = {
    getAll: cb => db.query('SELECT * FROM books', cb),

    getById: (id, cb) => db.query('SELECT * FROM books WHERE id = ?', [id], cb),

    create: (book, cb) => db.query('INSERT INTO books SET ?', book, cb),

    update: (id, book, cb) => db.query('UPDATE books SET ? WHERE id = ?', [book, id], cb),

    delete: (id, cb) => db.query('DELETE FROM books WHERE id = ?', [id], cb),
};

module.exports = Book;

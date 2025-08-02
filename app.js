const express = require('express');
const dotenv = require('dotenv');
const rateLimiter = require('./middlewares/rateLimiter');
const bookRoutes = require('./routes/book.routes');
const borrowerRoutes = require('./routes/borrower.routes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/books', rateLimiter, bookRoutes);
app.use('/api/borrowers', rateLimiter, borrowerRoutes);

module.exports = app; 

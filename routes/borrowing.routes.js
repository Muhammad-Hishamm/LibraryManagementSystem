const express = require('express');
const router = express.Router();
const controller = require('../controllers/borrowing.controller');

router.post('/checkout', controller.borrow);
router.post('/return/:id', controller.returnBook);
router.get('/overdue', controller.getOverdues);
router.get('/borrower/:borrower_id', controller.getByBorrower);
router.get('/export/overdues', controller.exportOverdueCSV);

module.exports = router;


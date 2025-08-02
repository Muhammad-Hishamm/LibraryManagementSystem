const express = require('express');
const router = express.Router();
const borrowerController = require('../controllers/borrower.controller');

router.get('/', borrowerController.getAllBorrowers);
router.post('/', borrowerController.createBorrower);
router.put('/:id', borrowerController.updateBorrower);
router.get('/:id', borrowerController.getBorrowerById);
router.delete('/:id', borrowerController.deleteBorrower);

module.exports = router;

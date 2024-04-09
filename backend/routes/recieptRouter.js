const express = require('express');
const router = express.Router();
const receiptController = require('/home/phineas/Desktop/MedCare/backend/Controllers/payment.jsx');

router.post('/api/v1/receipt', receiptController.sendReceipt);

module.exports = router;

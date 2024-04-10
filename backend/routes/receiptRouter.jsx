const { sendReceipt } = require('/home/phineas/Desktop/MedCare/backend/Controllers/payment.jsx');

const express = require('express');
const router = express.Router();


router.route("/").post(sendReceipt);

module.exports = router;

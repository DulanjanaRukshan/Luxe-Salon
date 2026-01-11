const express = require('express');
const router = express.Router();
const { createAppointment } = require('../controllers/appointmentController');

router.post('/book', createAppointment);

module.exports = router;

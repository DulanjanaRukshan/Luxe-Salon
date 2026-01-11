const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    service: String,
    date: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Appointment', appointmentSchema);

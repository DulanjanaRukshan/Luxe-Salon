const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
    try {
        const { name, phone, service, date, message } = req.body;
        const newAppointment = new Appointment({ name, phone, service, date, message });
        await newAppointment.save();
        console.log("📝 New Booking:", name);
        res.status(201).json({ success: true, message: "Appointment booked!" });
    } catch (error) {
        console.error("❌ Appointment Error:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

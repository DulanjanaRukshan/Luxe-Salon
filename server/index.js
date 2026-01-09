require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// --- Middleware ---
app.use(express.json());
app.use(cors());

// Test Route
app.get('/', (req, res) => {
  res.send('✅ Luxe Salon API is Live & Running!');
});

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ==========================================
// 1. APPOINTMENT SECTION (Existing)
// ==========================================
const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  service: String,
  date: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

app.post('/api/book', async (req, res) => {
  try {
    const { name, phone, service, date, message } = req.body;
    const newAppointment = new Appointment({ name, phone, service, date, message });
    await newAppointment.save();
    console.log("📝 New Booking:", name);
    res.status(201).json({ success: true, message: "Appointment booked!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ==========================================
// 2. NEWSLETTER SECTION (New)
// ==========================================

// Define Subscriber Schema
const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }, // unique prevents duplicate emails
  subscribedAt: { type: Date, default: Date.now }
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// Newsletter Route
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email already exists
    const existingUser = await Subscriber.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already subscribed" });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    console.log("📧 New Subscriber:", email);
    res.status(201).json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Subscription Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Routes
const appointmentRoutes = require('./routes/appointmentRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');

const app = express();

// --- Middleware ---
app.use(express.json());
app.use(cors());

// --- Database Connection ---
connectDB();

// --- Routes ---
app.use('/api', appointmentRoutes);
app.use('/api', newsletterRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('✅ Luxe Salon API is Live & Running!');
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
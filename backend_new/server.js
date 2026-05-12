const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('The Citadel Backend is Alive and Guarding the Realm.');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🏰 The King's Messenger is listening at http://localhost:${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000; // Default port

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://gloria:gloria3033@clusterrent.13iey.mongodb.net/?retryWrites=true&w=majority&appName=Clusterrent', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/properties', require('./routes/property'));

// Test route to check MongoDB connectivity
app.get('/api/test-connection', async (req, res) => {
  try {
    const result = await mongoose.connection.db.collection('users').findOne(); 
    res.status(200).send({ message: 'MongoDB connection is working', result });
  } catch (error) {
    res.status(500).send({ message: 'MongoDB connection failed', error });
  } // Closing brace added here
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

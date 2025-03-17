const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Logic to fetch properties from the database
    res.send('List of properties');
  } catch (error) {
    res.status(500).send('Server error');
  }
});


module.exports = router;

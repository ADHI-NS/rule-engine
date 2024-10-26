// routes/users.js
const express = require('express');
const User = require('../models/User'); // Import the User model
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users
        res.json(users); // Respond with the users
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

// routes/users.js
const express = require('express');
const User = require('../models/Rule'); // Import the User model
const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
    const { id, name, age, salary, experience, department } = req.body;

    try {
        const newUser = new User({ id, name, age, salary, experience, department });
        await newUser.save(); // Save the user to the database
        res.status(201).json(newUser); // Respond with the created user
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all users
router.get('/', async (req, res) => {
    debugger;
    try {
        const users = await User.find(); // Fetch all users
        res.json(users); // Respond with the users
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get user by ID
router.get('/:id', async (req, res) => {
    debugger;
    try {
        const user = await User.findOne({ id: req.params.id }); // Fetch user by ID
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user); // Respond with the user
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Export the router
module.exports = router;

// models/User.js
const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true, // ID is required
        unique: true,   // ID must be unique
    },
    name: {
        type: String,
        required: true, // Name is required
        trim: true,     // Trim whitespace
    },
    age: {
        type: Number,
        required: true, // Age is required
    },
    salary: {
        type: Number,
        required: true, // Salary is required
    },
    experience: {
        type: Number,
        required: true, // Experience is required
    },
    department: {
        type: String,
        required: true, // Department is required
    },
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;

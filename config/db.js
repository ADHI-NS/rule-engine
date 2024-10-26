const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017/RuleEngine";
let client;

const connectDB = async () => {
    try {
        client = new MongoClient(uri);
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
};

module.exports = { connectDB }; // Ensure this exports connectDB correctly

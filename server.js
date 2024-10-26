const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB } = require('./config/db'); // Destructure connectDB
const ruleRoutes = require('./routes/rules');
const userRoutes = require('./routes/users'); // Import user routes
const app = express();
connectDB(); // Connect to MongoDB

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/rules', ruleRoutes);
app.use('/api/users', userRoutes); // Add user routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    debugger;
  console.log(`Server running on port ${PORT}`);
});

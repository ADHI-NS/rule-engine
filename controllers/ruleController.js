const Rule = require('../models/Rule');

// Create a new rule
exports.createRule = async (req, res) => {
  const { ruleString } = req.body;
  const newRule = new Rule({ ruleString });

  try {
    await newRule.save();
    res.status(201).json(newRule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all rules
exports.getAllRules = async (req, res) => {
  try {
    const rules = await Rule.find();
    res.json(rules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const express = require('express');
const router = express.Router();
const UserModel = require('../models/userModel');

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const { username, email, age } = req.body;
    const newUser = new UserModel({ username, email, age });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating user' });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error getting users' });
  }
});

// Get a specific user by ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error getting user' });
  }
});

// Update a user by ID
router.put('/users/:id', async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating user' });
  }
});

// Delete a user by ID
router.delete('/users/:id', async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting user' });
  }
});

module.exports = router;

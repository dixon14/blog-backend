const express = require('express');

const userRouter = express.Router();

// Create user
userRouter.post('/register', async(req, res) => {
    try {
        res.json({
            status: "success",
            data: 'user registered',
        });
    } catch (error) {
        res.json(error.message)
    }
})

// User login
userRouter.post('/login', async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'user login',
        });
    } catch (error) {
        res.json(error.message)
    }
})

// Get a single user 
userRouter.get('/:id', async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'user details',
        });
    } catch (error) {
        res.json(error.message)
    }
})

// Get all users
userRouter.get('', async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'all user details',
        });
    } catch (error) {
        res.json(error.message)
    }
})

// Delete a user
userRouter.delete('/:id', async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'user deleted',
        });
    } catch (error) {
        res.json(error.message)
    }
})

// Update a user info
userRouter.put('/:id', async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'user updated',
        });
    } catch (error) {
        res.json(error.message)
    }
})

module.exports = {
    userRouter
};
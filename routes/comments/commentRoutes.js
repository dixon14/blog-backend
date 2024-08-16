const express = require('express');

const commentRouter = express.Router();

// Create a comment
commentRouter.post('', async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'comment created',
        });
    } catch (error) {
        res.json(error.message)
    }
})

// Get a single comment 
commentRouter.get('/:id', async (req, res) => {
    try {
    } catch (error) {
        res.json(error.message)
    }
})

// Get all comments
commentRouter.get('', async (req, res) => {
    try {
        res.json({
            "status": "success",
        })
    } catch (error) {
        res.json(error.message)
    }
})

// Delete a comment
commentRouter.delete('/:id', async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete comment",
        });
    } catch (error) {
        res.json(error.message)
    }
})

// Update a comment
commentRouter.put('/:id', async (req, res) => {
    try {
        res.json({
            
        });
    } catch (error) {
        res.json(error.message)
    }
})

module.exports = commentRouter;
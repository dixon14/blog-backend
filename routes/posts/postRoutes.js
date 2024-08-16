const express = require('express');

const postRouter = express.Router();

// Create post
postRouter.post('', async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'post created',
        });
    } catch (error) {
        res.json(error.message)
    }
})

// Get a single post 
postRouter.get('/:id', async (req, res) => {
    try {
    } catch (error) {
        res.json(error.message)
    }
})

// Get all posts
postRouter.get('', async (req, res) => {
    try {
        res.json({

        })
    } catch (error) {
        res.json(error.message)
    }
})

// Delete a post
postRouter.delete('/:id', async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete post",
        })
    } catch (error) {
        res.json(error.message)
    }
})

// Update a post
postRouter.put('/:id', async (req, res) => {
    try {
        res.json({
            
        })
    } catch (error) {
        res.json(error.message)
    }
})

module.exports = postRouter;
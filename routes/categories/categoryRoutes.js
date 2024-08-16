const express = require('express');

const categoryRouter = express.Router();

categoryRouter.post('', async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'category created',
        });
    } catch (error) {
        res.json(error.message)
    }
})

// Get a single category 
categoryRouter.get('/:id', async (req, res) => {
    try {
    } catch (error) {
        res.json(error.message)
    }
})

// Get all categories
categoryRouter.get('', async (req, res) => {
    try {
        res.json({

        })
    } catch (error) {
        res.json(error.message)
    }
})

// Delete a category
categoryRouter.delete('/:id', async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete category",
        });
    } catch (error) {
        res.json(error.message)
    }
})

// Update a category
categoryRouter.put('/:id', async (req, res) => {
    try {
        res.json({
            
        });
    } catch (error) {
        res.json(error.message)
    }
})

module.exports = categoryRouter;
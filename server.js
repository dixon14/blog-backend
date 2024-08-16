const express = require("express");

require('dotenv').config();
require('./config/dbConnect');
const app = express();

// middlewares
// routes



// -------
// users route
// -------
// Create user
app.post('/api/v1/users/register', async (req, res) => {
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
app.post('/api/v1/users/login', async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'user login',
        });
    } catch (error) {
        res.json(error.message)
    }
})

// Get a single user profile 
app.get('/api/v1/users/:id', async (req, res) => {
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
app.get('/api/v1/users', async (req, res) => {
    try {
    } catch (error) {
        res.json(error.message)
    }
})

// Delete a user
app.delete('/api/v1/users/:id', async (req, res) => {
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
app.put('/api/v1/users/:id', async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'user updated',
        });
    } catch (error) {
        res.json(error.message)
    }
})

// -------
// posts route
// -------
// Create post
app.post('/api/v1/posts', async (req, res) => {
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
app.get('/api/v1/posts/:id', async (req, res) => {
    try {
    } catch (error) {
        res.json(error.message)
    }
})

// Get all posts
app.get('/api/v1/posts', async (req, res) => {
    try {
        res.json({

        })
    } catch (error) {
        res.json(error.message)
    }
})

// Delete a post
app.delete('/api/v1/posts/:id', async (req, res) => {
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
app.put('/api/v1/posts/:id', async (req, res) => {
    try {
        res.json({
            
        })
    } catch (error) {
        res.json(error.message)
    }
})

// -------
// comments route
// -------
app.post('/api/v1/comments', async (req, res) => {
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
app.get('/api/v1/comments/:id', async (req, res) => {
    try {
    } catch (error) {
        res.json(error.message)
    }
})

// Get all comments
app.get('/api/v1/comments', async (req, res) => {
    try {
        res.json({

        })
    } catch (error) {
        res.json(error.message)
    }
})

// Delete a comment
app.delete('/api/v1/comments/:id', async (req, res) => {
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
app.put('/api/v1/comments/:id', async (req, res) => {
    try {
        res.json({
            
        });
    } catch (error) {
        res.json(error.message)
    }
})

// -------
// comments route
// -------
app.post('/api/v1/comments', async (req, res) => {
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
app.get('/api/v1/comments/:id', async (req, res) => {
    try {
        res.json({
            status: "success",
            data: ""
        })
    } catch (error) {
        res.json(error.message)
    }
})

// Get all comments
app.get('/api/v1/comments', async (req, res) => {
    try {
        res.json()
    } catch (error) {
        res.json(error.message)
    }
})

// Delete a comment
app.delete('/api/v1/comments/:id', async (req, res) => {
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
app.put('/api/v1/comments/:id', async (req, res) => {
    try {
        res.json({
            
        });
    } catch (error) {
        res.json(error.message)
    }
})

// -------
// categories route
// -------
app.post('/api/v1/categories', async (req, res) => {
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
app.get('/api/v1/categories/:id', async (req, res) => {
    try {
    } catch (error) {
        res.json(error.message)
    }
})

// Get all categories
app.get('/api/v1/categories', async (req, res) => {
    try {
        res.json({

        })
    } catch (error) {
        res.json(error.message)
    }
})

// Delete a category
app.delete('/api/v1/categories/:id', async (req, res) => {
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
app.put('/api/v1/categories/:id', async (req, res) => {
    try {
        res.json({
            
        });
    } catch (error) {
        res.json(error.message)
    }
})
// Error handlers

// Listen to server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Blog API server is up and running on ${PORT}`));
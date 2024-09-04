// Create a post
const createPostHandler = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'post created',
        });
    } catch (error) {
        res.json(error.message)
    }
};

// Get a single post 
const getPostHandler = async (req, res) => {
    try {
        
    } catch (error) {
        res.json(error.message)
    }
}

// Get all posts
const getAllPostsHandler = async (req, res) => {
    try {
        res.json({

        })
    } catch (error) {
        res.json(error.message)
    }
}

// Delete a post
const deletePostHandler = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete post",
        })
    } catch (error) {
        res.json(error.message)
    }
}

// Update a post
const updatePostHandler = async (req, res) => {
    try {
        res.json({
            
        })
    } catch (error) {
        res.json(error.message)
    }
}
module.exports = {
    createPostHandler,
    getPostHandler,
    getAllPostsHandler,
    deletePostHandler,
    updatePostHandler
}
// Create a comment
const createCommentHandler = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "comment created",
        });
    } catch (error) {
        res.json(error.message);
    }
};

// Get a single comment
const getCommentHandler = async (req, res) => {
    try {
    } catch (error) {
        res.json(error.message);
    }
};

// Get all comments
const getAllCommentsHandler = async (req, res) => {
    try {
        res.json({
            status: "success",
        });
    } catch (error) {
        res.json(error.message);
    }
};

// Delete a comment
const deleteCommentHandler = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete comment",
        });
    } catch (error) {
        res.json(error.message);
    }
};

// Update comment
const updateCommentHandler = async (req, res) => {
    try {
        res.json({});
    } catch (error) {
        res.json(error.message);
    }
};

module.exports = {
    createCommentHandler,
    getCommentHandler,
    getAllCommentsHandler,
    deleteCommentHandler,
    updateCommentHandler,
};

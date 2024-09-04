const express = require('express');
const { createCommentHandler, getCommentHandler, getAllCommentsHandler, deleteCommentHandler, updateCommentHandler } = require('../../controllers/comments/comment_controller');

const commentRouter = express.Router();

commentRouter.post('', createCommentHandler)
commentRouter.get('/:id', getCommentHandler)
commentRouter.get('', getAllCommentsHandler)
commentRouter.delete('/:id', deleteCommentHandler)
commentRouter.put('/:id', updateCommentHandler)

module.exports = commentRouter;
const express = require('express');
const { createPostHandler, getPostHandler, getAllPostsHandler, deletePostHandler, updatePostHandler } = require('../../controllers/posts/post_controller');

const postRouter = express.Router();

postRouter.post('', createPostHandler)
postRouter.get('/:id',getPostHandler)
postRouter.get('', getAllPostsHandler)
postRouter.delete('/:id', deletePostHandler)
postRouter.put('/:id',updatePostHandler)

module.exports = postRouter;
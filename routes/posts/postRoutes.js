const express = require("express");
const {
    createPostHandler,
    getPostHandler,
    getAllPostsHandler,
    deletePostHandler,
    updatePostHandler,
} = require("../../controllers/posts/post_controller");
const { authHandler } = require("../../middlewares/auth");

const postRouter = express.Router();

postRouter.get("/:id", getPostHandler);
postRouter.get("", getAllPostsHandler);
postRouter.post("", authHandler, createPostHandler);
postRouter.delete("/:id", deletePostHandler);
postRouter.put("/:id", updatePostHandler);

module.exports = postRouter;

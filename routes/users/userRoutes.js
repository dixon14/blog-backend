const express = require("express");
const {
    userRegisterHandler,
    userLoginHandler,
    getUserHandler,
    getAllUsersHandler,
    deleteUserHandler,
    profilePhotoUploadHandler,
    updateUserHandler,
    whoViewedMyProfileHandler,
    followingHandler,
    unfollowingHandler,
    blockUserHandler,
    unblockUserHandler,
} = require("../../controllers/users/user_controller");
const { authHandler, adminAuthHandler } = require("../../middlewares/auth");
const multer = require("multer");
const storage = require("../../config/cloudinary");
const upload = multer({ storage });

const userRouter = express.Router();
userRouter.post("/register", userRegisterHandler);
userRouter.post("/login", userLoginHandler);
userRouter.post(
    "/profile-photo",
    authHandler,
    upload.single("profile"),
    profilePhotoUploadHandler
);
userRouter.get("", getAllUsersHandler);
userRouter.get("/profile-viewers/:id", authHandler, whoViewedMyProfileHandler);
userRouter.get("/following/:id", authHandler, followingHandler);
userRouter.get("/unfollow/:id", authHandler, unfollowingHandler);
userRouter.get("/profile", authHandler, getUserHandler);
userRouter.delete("/:id", deleteUserHandler);
userRouter.put("", authHandler, updateUserHandler);
userRouter.put("/block/:id", adminAuthHandler, blockUserHandler);
userRouter.put("/unblock/:id", adminAuthHandler, unblockUserHandler);

module.exports = {
    userRouter,
};

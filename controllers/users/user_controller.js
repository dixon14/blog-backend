const bcrypt = require("bcryptjs");
const User = require("../../models/User/User");
const { generateToken } = require("../../utils/token");
const { AppErr } = require("../../utils/error");

// Create user
const userRegisterHandler = async (req, res, next) => {
    const { firstName, lastName, username, email, password } = req.body;
    try {
        // Check if email exists
        const userFound = await User.findOne({ email });
        if (userFound) {
            throw new AppErr(500, "User already exists");
        }

        // Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword,
        });

        res.json({
            status: "success",
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

// User login
// Generate JWT token for subsequent requests
const userLoginHandler = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        // check email exist
        const user = await User.findOne({ email });
        if (!user) {
            throw new AppErr(403, "Invalid login credentials");
        }

        // verify password
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            throw new AppErr(403, "Invalid login credentials");
        }

        res.json({
            status: "success",
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            },
        });
    } catch (error) {
        next(error);
    }
};

// Get user profile
// User can only get their own profile
const getUserHandler = async (req, res, next) => {
    try {
        const user = await User.findById(req.userAuth).populate({
            path: "posts",
        });
        res.json({
            status: "success",
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

// Who viewed my profile
const whoViewedMyProfileHandler = async (req, res, next) => {
    try {
        // Find the original user & who viewed
        const user = await User.findById(req.params.id);
        const whoViewed = await User.findById(req.userAuth);

        if (user && whoViewed) {
            const isUserAlreadyViewed = user.viewers.find(
                (viewer) => viewer.toString() === whoViewed.toString()
            );

            if (!isUserAlreadyViewed) {
                user.viewers.push(whoViewed._id);
            }

            await user.save();
            res.json({
                status: "success",
                data: "Successfully viewed the profile ",
            });
        }
    } catch (error) {
        next(error);
    }
};

// Get all users
const getAllUsersHandler = async (req, res, next) => {
    try {
        res.json({
            status: "success",
            data: "all user details",
        });
    } catch (error) {
        next(error);
    }
};

// Delete a user
const deleteUserHandler = async (req, res, next) => {
    try {
        res.json({
            status: "success",
            data: "user deleted",
        });
    } catch (error) {
        next(error);
    }
};

// Update a user info
const updateUserHandler = async (req, res, next) => {
    try {
        res.json({
            status: "success",
            data: "user updated",
        });
    } catch (error) {
        next(error);
    }
};

// Profile photo upload
const profilePhotoUploadHandler = async (req, res, next) => {
    try {
        // Find user to be updated
        const user = User.findById(req.userAuth);
        if (!user) {
            throw new AppErr(403, "Invalid login credentials");
        }

        if (user.isBlocked) {
            throw new AppErr(403, "Action not allowed");
        }

        // Check if user is updating their photo
        if (req.file) {
            await User.findByIdAndUpdate(
                req.userAuth,
                {
                    $set: {
                        profilePhoto: req.file.path,
                    },
                },
                {
                    new: true,
                }
            );

            res.json({
                status: "success",
                data: "Profile photo uploaded",
            });
        }
    } catch (error) {
        next(error);
    }
};

// Following
const followingHandler = async (req, res, next) => {
    try {
        // Find the requesting user & user to follow
        const userLoggedIn = await User.findById(req.userAuth);
        const userToFollow = await User.findById(req.params.id);

        if (userLoggedIn && userToFollow) {
            const isAlreadyFollowed = userToFollow.followers.find(
                (follower) =>
                    follower.toString() === userLoggedIn._id.toString()
            );

            if (!isAlreadyFollowed) {
                userToFollow.followers.push(userLoggedIn._id); // add follower id
                userLoggedIn.following.push(userToFollow._id); // add following id

                await userToFollow.save();
                await userLoggedIn.save();

                res.json({
                    status: "success",
                    data: `Successfully followed user ${userToFollow._id}`,
                });
            } else {
                throw new AppErr(500, "You already followed this user");
            }
        }
    } catch (error) {
        next(error);
    }
};

// Unfollowing user
const unfollowingHandler = async (req, res, next) => {
    try {
        const userToUnfollow = await User.findById(req.params.id);
        const userLoggedIn = await User.findById(req.userAuth);

        if (userToUnfollow && userLoggedIn) {
            //  Check if the userLoggedIn is already in the userToUnfollow list
            const isUserAlreadyFollowed = userToUnfollow.followers.find(
                (follower) =>
                    follower.toString() === userLoggedIn._id.toString()
            );

            if (!isUserAlreadyFollowed) {
                throw new AppErr(500, "You have not followed this user");
            } else {
                // Remove userLoggedin from the userToUnfollow's followers
                userToUnfollow.followers = userToUnfollow.followers.filter(
                    (follower) =>
                        follower.toString() !== userLoggedIn._id.toString()
                );

                // Remove userToUnfollow from the userLoggedIn's following
                userLoggedIn.following = userLoggedIn.following.filter(
                    (following) =>
                        following.toString() !== userToUnfollow._id.toString()
                );
                await userToUnfollow.save();
                await userLoggedIn.save();

                res.json({
                    status: "success",
                    data: "You have successfully unfollowed the user",
                });
            }
        }
    } catch (error) {
        next(error);
    }
};

// Blocking certain user (Only admin can do it)
const blockUserHandler = async (req, res, next) => {
    try {
        // Find the userToBlock
        const userToBlock = await User.findByIdAndUpdate(req.params.id, {
            isBlocked: true,
        });
        if (!userToBlock) {
            throw new AppErr(500, "Unable to find user");
        }

        res.json({
            status: "success",
            data: "You have successfully blocked the user",
        });
    } catch (error) {
        next(error);
    }
};

// Unblock user
const unblockUserHandler = async (req, res, next) => {
    try {
        // Find the userToBlock
        const userToBlock = await User.findByIdAndUpdate(req.params.id, {
            isBlocked: false,
        });
        if (!userToBlock) {
            throw new AppErr(500, "Unable to find user");
        }

        res.json({
            status: "success",
            data: "You have successfully unblocked the user",
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    userRegisterHandler,
    userLoginHandler,
    getUserHandler,
    getAllUsersHandler,
    deleteUserHandler,
    updateUserHandler,
    profilePhotoUploadHandler,
    whoViewedMyProfileHandler,
    followingHandler,
    unfollowingHandler,
    blockUserHandler,
    unblockUserHandler,
};

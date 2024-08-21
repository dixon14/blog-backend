const bcrypt = require("bcryptjs");
const User = require("../../models/User/User");
const { generateToken } = require("../../utils/token");
const { AppErr } = require("../../utils/error");

// Create user
const userRegisterHandler = async(req, res, next) => {
    const {firstName, lastName, username, email, password} = req.body;
    try {
        // Check if email exists
        const userFound = await User.findOne({email});
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
}

// User login
// Generate JWT token for subsequent requests
const userLoginHandler = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        // check email exist
        const user = await User.findOne({email});
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
}

// Get user profile
// User can only get their own profile
const getUserHandler = async (req, res, next) => {
    try {
        const user = await User.findById(req.userAuth)
        res.json({
            status: "success",
            data: user,
        });
    } catch (error) {
        next(error);
    }
}

// Get all users
const getAllUsersHandler = async (req, res, next) => {
    try {
        res.json({
            status: "success",
            data: 'all user details',
        });
    } catch (error) {
        next(error);
    }
}

// Delete a user
const deleteUserHandler = async (req, res, next) => {
    try {
        res.json({
            status: "success",
            data: 'user deleted',
        });
    } catch (error) {
        next(error);
    }
}

// Update a user info  
const updateUserHandler = async (req, res, next) => {
    try {
        res.json({
            status: "success",
            data: 'user updated',
        });
    } catch (error) {
        next(error);
    }
}

// Profile photo upload 
const profilePhotoUploadHandler = async (req, res, next) => {
    try {
        // Find user to be updated
        const user = User.findById(req.userAuth);
        if (!user) {
            throw new AppErr(403, "Invalid login credentials");
        }

        if (user.isBlocked) {
            throw new AppErr(403, "Action not allowed")
        }

        // Check if user is updating their photo
        if (req.file) {
            await User.findByIdAndUpdate(req.userAuth, 
            {
                $set: 
                {
                    profilePhoto: req.file.path,
                }
            },
            {
                new: true,
            }
            );

            res.json({
                status: "success",
                data: 'Profile photo uploaded',
            });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    userRegisterHandler,
    userLoginHandler,
    getUserHandler,
    getAllUsersHandler,
    deleteUserHandler,
    updateUserHandler,
    profilePhotoUploadHandler
}
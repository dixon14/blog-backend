const bcrypt = require("bcryptjs");
const User = require("../../models/User/User");
const { generateToken } = require("../../utils/token");

// Create user
const userRegisterHandler = async(req, res) => {
    const {firstName, lastName, username, email, password} = req.body;
    try {
        // Check if email exists
        const userFound = await User.findOne({email});
        if (userFound) {
            return res.status(400).json({
                error: "User already exist"
            })
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
        res.json(error.message)
    }
}

// User login
// Generate JWT token for subsequent requests
const userLoginHandler = async (req, res) => {
    const { email, password } = req.body;
    try {
        // check email exist
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({
                msg: "Invalid login credentials"
            })
        }

        // verify password
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            return res.status(400).json({
                msg: "Invalid login credentials"
            })
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
        res.json(error.message)
    }
}

// Get user profile
// User can only get their own profile
const getUserHandler = async (req, res) => {
    try {
        const user = await User.findById(req.userAuth)
        res.json({
            status: "success",
            data: user,
        });
    } catch (error) {
        res.json(error.message)
    }
}

// Get all users
const getAllUsersHandler = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'all user details',
        });
    } catch (error) {
        res.json(error.message)
    }
}

// Delete a user
const deleteUserHandler = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'user deleted',
        });
    } catch (error) {
        res.json(error.message)
    }
}

// Update a user info
const updateUserHandler = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'user updated',
        });
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {
    userRegisterHandler,
    userLoginHandler,
    getUserHandler,
    getAllUsersHandler,
    deleteUserHandler,
    updateUserHandler
}
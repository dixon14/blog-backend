// Create user
const userRegisterHandler = async(req, res) => {
    try {
        res.json({
            status: "success",
            data: 'user registered',
        });
    } catch (error) {
        res.json(error.message)
    }
}

// User login
const userLoginHandler = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'user login',
        });
    } catch (error) {
        res.json(error.message)
    }
}

// Get a single user 
const getUserHandler = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'user details',
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
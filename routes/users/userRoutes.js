const express = require('express');
const { userRegisterHandler, userLoginHandler, getUserHandler, getAllUsersHandler, deleteUserHandler, updateUserHandler } = require('../../controllers/users/userController');
const { authHandler } = require('../../middlewares/auth');

const userRouter = express.Router();
userRouter.post('/register', userRegisterHandler)
userRouter.post('/login', userLoginHandler)
userRouter.get('', getAllUsersHandler)
userRouter.get('/profile', authHandler, getUserHandler)
userRouter.delete('/:id', deleteUserHandler)
userRouter.put('/:id', updateUserHandler)

module.exports = {
    userRouter
};
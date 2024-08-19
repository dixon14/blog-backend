const express = require('express');
const { userRegisterHandler, userLoginHandler, getUserHandler, getAllUsersHandler, deleteUserHandler, updateUserHandler } = require('../../controllers/users/userController');

const userRouter = express.Router();
userRouter.post('/register', userRegisterHandler)
userRouter.post('/login', userLoginHandler)
userRouter.get('/:id', getUserHandler)
userRouter.get('', getAllUsersHandler)
userRouter.delete('/:id', deleteUserHandler)
userRouter.put('/:id', updateUserHandler)

module.exports = {
    userRouter
};
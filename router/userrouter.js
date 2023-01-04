const express = require('express');
const userController = require('../controller/usercontroller');

const userRouter = express.Router();

userRouter.get('/user/alluser', userController.getAllUser);

module.exports = userRouter;
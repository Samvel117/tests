const express = require('express');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const UserController = require('../controllers/controllers');

const user = new UserController();
const userRouter = express.Router();
{

}

userRouter.post("/sign-up",user.register);
module.exports = userRouter;

import express from 'express';
import * as UserController from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/', UserController.create);

export {
    userRouter
};

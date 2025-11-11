import express from 'express';
import * as UserController from '../controllers/user.controller.js';
import { body } from 'express-validator';

const userRouter = express.Router();

function createUserRequestValidations() {
    return [
        body('firstName')
            .trim()
            .notEmpty().withMessage('First name is required')
            .isString().withMessage('First name must be a string')
            .isAlpha().withMessage('First name must contain letters only'),
        body('lastName')
            .trim()
            .notEmpty().withMessage('Last name is required')
            .isString().withMessage('Last name must be a string')
            .isAlpha().withMessage('Last name must contain letters only'),
        body('email')
            .trim()
            .notEmpty().withMessage('Email is required')
            .isEmail().withMessage('Email is invalid'),
        body('password')
            .trim()
            .notEmpty().withMessage('Password is required')
            .isLength({min: 8, max: 20}).withMessage('Password must be 8 to 20 characters long'),
    ];
}

userRouter.post(
    '/',
    ...createUserRequestValidations(),
    UserController.create
);

export {
    userRouter
};

import { body } from "express-validator";

export default function signInRequestValidator() {
    return [
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

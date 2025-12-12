import { body } from "express-validator";

export default function signUpRequestValidator() {
    return [
        body('firstName')
            .trim()
            .notEmpty().withMessage('First Name is required')
            .isString().withMessage('First Name must be a string')
            .isAlpha().withMessage('First Name must contain letters only'),

        body('lastName')
            .trim()
            .notEmpty().withMessage('Last Name is required')
            .isString().withMessage('Last Name must be a string')
            .isAlpha().withMessage('Last Name must contain letters only'),

        body('gender')
            .trim()
            .notEmpty().withMessage('Gender is required')
            .isIn(['male', 'female']).withMessage('Gender value is invalid'),

        body('dob')
            .trim()
            .notEmpty().withMessage('Date of Birth is required')
            .isDate().withMessage('Date of Birth must be a date'),

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

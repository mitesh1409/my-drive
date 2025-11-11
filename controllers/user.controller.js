import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import { User } from '../models/user.model.js';

async function create(req, res) {
    // Check request validation results.
    const validationResults = validationResult(req);
    if (!validationResults.isEmpty()) {
        res
            .status(400)
            .json({
                status: 'Bad Request',
                message: 'Failed to create user',
                errors: validationResults.array()
            });
        return;
    }

    const { firstName, lastName, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
    } catch (error) {
        console.log('Error', error.message);

        res
            .status(500)
            .json({
                status: 'Internal Server Error',
                message: 'Failed to create user'
            });

        return;
    }

    res
        .status(201)
        .json({
            status: 'Created',
            message: 'User created successfully!'
        });
}

export {
    create
};

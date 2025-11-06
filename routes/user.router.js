import express from 'express';
import { User } from '../models/user.model.js';

const userRouter = express.Router();

userRouter.post('/', async (req, res) => {
    console.log('Called POST /users');
    console.log('Request', req.body);

    const { firstName, lastName, email, password } = req.body;

    console.log(firstName, lastName, email, password);

    await User.create({
        firstName,
        lastName,
        email,
        password
    });

    res.send('User created successfully!');
});

export {
    userRouter
};

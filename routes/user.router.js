import express from 'express';

const userRouter = express.Router();

userRouter.post('/', (req, res) => {
    console.log('Called POST /users');
    console.log('Request', req.body);

    res.send('User created successfully!');
});

export {
    userRouter
};

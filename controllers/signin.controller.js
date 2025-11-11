import { validationResult } from "express-validator";
import bcrypt from 'bcrypt';
import { User } from "../models/user.model";

function displaySignin(req, res) {
    res.render('sign-in');
}

async function doSignin(req, res) {
    const validationResults = validationResult(req);
    if (!validationResults.isEmpty()) {
        res
            .status(400)
            .json({
                status: 'Bad Request',
                message: 'Failed to login',
                errors: validationResults.array()
            });
        return;
    }

    const { email, password } = req.body;

    // Get user by email.
    const user = await User.findOne({email: email});

    if (!user) {
        res
            .status(400)
            .json({
                status: 'Bad Request',
                message: 'Failed to login',
                errors: ['Email or Password is incorrect']
            });
        return;
    }

    // Check password.
    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched) {
        res
            .status(400)
            .json({
                status: 'Bad Request',
                message: 'Failed to login',
                errors: ['Email or Password is incorrect']
            });
        return;
    }

    // All good. Now we can proceed with generating auth token for the user.


}

export {
    displaySignin,
    doSignin
};

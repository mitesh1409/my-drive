import { User } from '../models/user.model.js';

async function create(req, res) {
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
}

export {
    create
};

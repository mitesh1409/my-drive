import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        minLength: [3, 'First name must be at least 3 characters long']
    },
    lastName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        minLength: [3, 'Last name must be at least 3 characters long']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
});

const User = mongoose.model('User', userSchema);

export {
    User
};

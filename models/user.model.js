import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        minLength: {
            value: 3,
            message: 'First name must be at least 3 characters long'
        }
    },
    lastName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        minLength: {
            value: 3,
            message: 'Last name must be at least 3 characters long'
        }
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
        required: true,
        minLength: {
            value: 8,
            message: 'Password must be minimum 8 characters long'
        },
        maxLength: {
            value: 20,
            message: 'Password must be maximum 20 characters long'
        }
    },
});

const User = mongoose.model('User', userSchema);

export {
    User
};

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    gender: {
        type: String,
        trim: true,
        required: true,
        enum: ['male', 'female'],
    },
    dob: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
});

const User = mongoose.model('users', userSchema);

export default User;

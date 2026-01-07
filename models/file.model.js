import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    path: {
        type: String,
        trim: true,
        required: [ true, 'File path is required' ],
    },
    originalName: {
        type: String,
        trim: true,
        required: [ true, 'Original file name is required' ],
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [ true, 'User is required' ],
    }
});

const File = mongoose.model('files', fileSchema);

export default File;

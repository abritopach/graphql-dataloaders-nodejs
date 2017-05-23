import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: { type: String },
    content:{ type: String },
    category: { type: String },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    }
});

export const PostModel = mongoose.model('Post', PostSchema);

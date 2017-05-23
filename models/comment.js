import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    comment:{ type: String },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment'
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

export const CommentModel = mongoose.model('Comment', CommentSchema);

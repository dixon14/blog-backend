const mongoose = require('mongoose');
const { readingTime } = require('../utils/utils')

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Post Title is required'],
            trim: true,
            unique: true,
        },
        description: {
            type: String,
            required: [true, 'Post Title is required'],
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: [true, 'Post Category is required'],
        },
        numViews: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            }
        ], 
        likes: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            }
        ], 
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Post Author is required'],
        },
        photo: {
            type: String,
            required: [true, 'Post Image is required'],
        },
        state: {
            type: String,
            default: 'draft',
            enum: ['draft', 'published']
        },
        read_count: {
            type: Number,
            default: 0,
        },
        reading_time: Number, 
        tags: [String],
        body: String
    },
    { 
        timestamps: true,
    }
);

// // calculate reading time before saving document
// postSchema.pre('save', function(next) {
//     let post = this

//     // do nothing if the post body is unchanged
//     if (!post.isModified('body')) return next()

//     const timeToRead = readingTime(this.body)

//     post.reading_time = timeToRead
//     next()
// })

// postSchema.set('toJSON', {
//     transform: (document, returnedObject) => {
//         delete returnedObject.__v
//         delete returnedObject.owner
//     },
// })

const Post =  mongoose.model('Post', postSchema);
module.exports = Post;
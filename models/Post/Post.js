const mongoose = require('mongoose');
const { calculateReadingTime } = require('../../utils/post');

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
            required: [true, 'Post Description is required'],
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

// calculate reading time before saving document
postSchema.pre('save', function(next) {
   let post = this;

   if (!post.isModified('body')) return next();

   const timeToRead = calculateReadingTime(post);

   article.reading_time = timeToRead;
   next();
})

// postSchema.set('toJSON', {
//     transform: (document, returnedObject) => {
//         delete returnedObject.__v
//         delete returnedObject.owner
//     },
// })

const Post =  mongoose.model('Post', postSchema);
module.exports = Post;
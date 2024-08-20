const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// create schema 
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true, 
        unique: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    postCount: {
        type: Number,
        default: 0,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    roles: {
        type: String,
        enum: ['Admin', 'Guest'],
    },
    viewedBy : [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        }
    ],
    followers: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        }
    ],
    following: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        }
    ],
    active: {
        type: Boolean,
        default: true,
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
        }
    ],
},
    {
        timestamps: true,
    }
);

// Compile user model
const User =  mongoose.model('User', userSchema);

// userSchema.pre('save', function(next) {
//     let user = this;

//     // do nothing if the password is not modified
//     if (!user.isModified('password')) return next();

//     // hash the password using our new salt
//     bcrypt.hash(user.password, 10, (err, hash) => {
//         if (err) return next(err);

//         // overwrite the plain text password with the hashed one
//         user.password = hash
//         next();
//     })
// })


module.exports = User;
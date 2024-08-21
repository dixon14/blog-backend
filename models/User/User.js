const mongoose = require('mongoose');

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
    profilePhoto: {
        type: String,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ['Admin', 'Guest'],
    },
    viewers : [
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
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
        }
    ],
    blocked: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    plan: [
        {
            type: String,
            enum: ['Free', 'Premium', 'Pro'],
            default: 'Free',
        }
    ],
    userAward: [
        {
            type: String,
            enum: ['Bronze', 'Silver', 'Gold'],
            default: 'Bronze',
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
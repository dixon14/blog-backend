const mongoose = require("mongoose");
const Post = require("../Post/Post");

// create schema
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First Name is required"],
        },
        lastName: {
            type: String,
            required: [true, "Last Name is required"],
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: [true, "Email is required"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
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
            enum: ["Admin", "Guest"],
        },
        viewers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post",
            },
        ],
        blocked: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        plan: {
            type: String,
            enum: ["Free", "Premium", "Pro"],
            default: "Free",
        },
        userAward: [
            {
                type: String,
                enum: ["Bronze", "Silver", "Gold"],
                default: "Bronze",
            },
        ],
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
    }
);

// Pre hooks - to determine user's last post date
userSchema.pre("find", async function (next) {
    console.log(this);
    const userID = this._conditions._id;

    const posts = await Post.find({ author: userID });
    const lastPost = posts[posts.length - 1];

    // get the latest post date
    const lastPostDate = new Date(lastPost.createdAt);
    const lastPostDateStr = lastPostDate.toDateString();

    userSchema.virtual("lastPostDate").get(function () {
        return lastPostDateStr;
    });
    next();
});

userSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`;
});

userSchema.virtual("postCount").get(function () {
    return this.posts.length;
});

userSchema.virtual("followersCount").get(function () {
    return this.followers.length;
});

// Compile user model
const User = mongoose.model("User", userSchema);

module.exports = User;

const express = require("express");
const { userRouter } = require("./routes/users/userRoutes");
const postRouter = require("./routes/posts/postRoutes");
const commentRouter = require("./routes/comments/commentRoutes");
const categoryRouter = require("./routes/categories/categoryRoutes");
const { errorHandler, notFoundErrHandler } = require("./middlewares/error");

require('dotenv').config();
require('./config/dbConnect');
const app = express();

app.use(express.json()) // parse incoming payload

// middlewares
// routes 
app.use('/api/v1/users', userRouter) // users route
app.use('/api/v1/posts', postRouter) // posts route
app.use('/api/v1/comments', commentRouter) // comments route
app.use('/api/v1/categories', categoryRouter) // category route

// Error handler
app.use(errorHandler);
app.use("*", notFoundErrHandler);

// Listen to server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Blog API server is up and running on ${PORT}`));
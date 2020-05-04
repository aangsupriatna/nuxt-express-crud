const app = require('express')();
module.exports = { path: '/api', handler: app };

// Auth
const postAuth = require('./auth/post-auth');
const getAuth = require('./auth/get-auth');

app.use(postAuth);
app.use(getAuth);

// Post
const createPost = require('./post/create-post');
const deletePost = require('./post/delete-post');
const editPost = require('./post/edit-post');
const getPost = require('./post/get-post');

app.use(createPost);
app.use(deletePost);
app.use(editPost);
app.use(getPost);

// Posts
const getPosts = require('./posts/get-posts')

app.use(getPosts)

// User
const createUser = require('./user/create-user');
const deleteUser = require('./user/delete-user');
const editUser = require('./user/edit-user');
const getUser = require('./user/get-user');

app.use(createUser);
app.use(deleteUser);
app.use(editUser);
app.use(getUser);

// Users
const getUsers = require('./users/get-users');

app.use(getUsers);
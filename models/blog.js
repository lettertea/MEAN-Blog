/* ===================
   Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

// Validate Function to check blog title length
let titleLengthChecker = (title) => {
    // Check if blog title exists
    if (!title) {
        return false; // Return error
    } else {
        // Check the length of title
        if (title.length < 1 || title.length > 50) {
            return false; // Return error if not within proper length
        } else {
            return true; // Return as valid title
        }
    }
};


const titleValidators = [{
    validator: titleLengthChecker,
    message: 'Title must be no more than 50 characters'
}];
// Validate Function to check body length
let bodyLengthChecker = (body) => {
    // Check if body exists
    if (!body) {
        return false; // Return error
    } else {
        // Check length of body
        if (body.length < 1 || body.length > 500) {
            return false; // Return error if does not meet length requirement
        } else {
            return true; // Return as valid body
        }
    }
};

// Array of Body validators
const bodyValidators = [
    // First Body validator
    {
        validator: bodyLengthChecker,
        message: 'Body may not be more than 500 characters'
    }
];

// Validate Function to check comment length
let commentLengthChecker = (comment) => {
    // Check if comment exists
    if (!comment[0]) {
        return false; // Return error
    } else {
        // Check comment length
        if (comment[0].length < 1 || comment[0].length > 200) {
            return false; // Return error if comment length requirement is not met
        } else {
            return true; // Return comment as valid
        }
    }
};

// Array of Comment validators
const commentValidators = [
    // First comment validator
    {
        validator: commentLengthChecker,
        message: 'Comments may not be more than 200 characters'
    }
];

// Blog Model Definition
const blogSchema = new Schema({
    title: { type: String, required: true, validate: titleValidators },
    body: { type: String, required: true, validate: bodyValidators },
    createdBy: { type: String },
    createdAt: { type: Date, default: Date.now() },
    likes: { type: Number, default: 0 },
    likedBy: { type: Array },
    dislikes: { type: Number, default: 0 },
    dislikedBy: { type: Array },
    comments: [{
        comment: { type: String, validate: commentValidators },
        commentator: { type: String }
    }]
});

// Export Module/Schema
module.exports = mongoose.model('Blog', blogSchema);
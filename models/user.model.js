const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required:  true
    },
    posts: [{
        type: Types.ObjectId,
        ref: 'Post'
    }],
    img: {
        type: String,
    },
    description: {
        type: String
    },
});

module.exports = model('User', schema);

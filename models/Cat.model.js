const mongoose = require('mongoose');

const catSchema = new mongoose.Schema(
    {name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 30,
    },
    color: {
        type: String,
        maxlength: 60,
        minlength: 3,
    },
    photoUrl: {
        type: String,
     // you can create criteria for the string match //  match: /^[A-Z][a-z][0-9$/
        default:
        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    friends: [ { type: String, minlenght: 3}]
})

const Cat = mongoose.model("Cat", catSchema)

module.exports = Cat;
// module.exports = mongoose.module("Cat", catSchema);

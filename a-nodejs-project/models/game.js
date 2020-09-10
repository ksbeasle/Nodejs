const mongoose = require('mongoose') //mongoose for Schema

//Schema
let Schema = mongoose.Schema

//schema for genre
let genreSchema = new Schema({
    genre: {
        type: String,
        required: true
    }
})

//schema for game
let gameSchema = new Schema({
    title: { 
        type: String,
        required: true,
    },
    genre: [genreSchema],
    unique: true
})

const Game = mongoose.model('game', gameSchema)

//export
module.exports = Game
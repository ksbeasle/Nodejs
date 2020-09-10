const mongoose = require('mongoose')
const Schema = mongoose.Schema


const gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    esrb: {
        type: String,
        required: true
    }
}, {timestamps: true})

const gameModel = mongoose.model('Game', gameSchema)


module.exports = gameModel
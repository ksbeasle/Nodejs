const express = require('express')
const Game = require('../models/game')

router = express.Router()

router.post('/add', (req, res) => {
    const g = new Game(req.body)
    console.log('Attempting to save')
    g.save()
    res.redirect('/')
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    Game.findById(id)
    console.log(Game.findById(id))
    res.end()
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    Game.findByIdAndDelete(id)
    .then(result => {
        res.json({
            redirect: '/'
        })
        .catch(err => {console.log(err)})
    })
    res.end()
})

module.exports = router
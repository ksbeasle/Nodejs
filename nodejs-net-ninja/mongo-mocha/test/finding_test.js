const assert = require('assert')
const GameModel = require('../models/game')


describe('Finding records', () => {
    var g;
    //make sure at least ONE record is in the DB
    beforeEach((done) => {
        g = new GameModel({
            title: 'a test title',
            esrb: 'asdsafas'
        })

        g.save().then(() => {
            done()
        })

    })

    it('Find single record', (done) => {
        GameModel.findOne({title: 'a test title'}).then((result)=>{
            assert(result.title === 'a test title')
            done()
        })
    })

    it('Find a record by ID', (done) => {
        GameModel.findOne({_id:g._id}).then((result)=>{
            assert(result._id.toString() === g._id.toString())
            done()
        })
    })
})
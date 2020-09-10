const assert = require('assert')
const GameModel = require('../models/game')

describe('Saving records', () => {
    //Create tests
    it('Saving a record to the database', function(done){
        g = new GameModel({
            title: 'a title',
            esrb: 'An ESRB rating'
        })

        g.save().then(function(){
            //it is not new because it is now saved into the database
            assert(g.isNew === false)
           // done()
        })
        done()
    })
})
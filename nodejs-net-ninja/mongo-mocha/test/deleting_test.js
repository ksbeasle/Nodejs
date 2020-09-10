const assert = require('assert')
const GameModel = require('../models/game')





describe('Deleting a record', () => {


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


   //create tests
   it('Delete one record', (done) => {
       GameModel.findOneAndRemove({title:'delete me'}).then(() => {
        GameModel.findOne({title:'delete me'}).then((result)=>{
            assert(result === null)
            done()
        })
       })
   })

})
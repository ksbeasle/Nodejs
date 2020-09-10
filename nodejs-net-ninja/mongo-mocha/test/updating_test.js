const assert = require('assert')
const GameModel = require('../models/game')


describe('Updating records', () => {
    var g;
//make sure at least ONE record is in the DB
beforeEach((done) => {
    g = new GameModel({
        title: 'update',
        esrb: 'asdsafas'
    })

    g.save().then(() => {
        done()
    })

})

    

    it('Update one record', (done) => {
        GameModel.findOneAndUpdate({title: 'update'}, {title: 'update2'}).then(()=>{
            GameModel.findById({_id:g_id}).then((result)=>{
                assert(result.title === 'update2')
                done()
            })
        })
        done()
    })
    
/* https://docs.mongodb.com/manual/reference/operator/update/
    it("increment by 1", (done) => {
        //we use update() to get ALL records and pass an empty object as the first arg to apply it to all records
        GameModel.update({}, {$inc:{weight:1}}).then(()=>{
            GameModel.findOne({name: 'somename'}).then((result)=>{
                assert(result.weight === 1)
                done()
            })
        })
        done()
    })
    */
})
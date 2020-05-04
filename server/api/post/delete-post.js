const app = require('express')()
const Datastore = require('nedb')

app.delete('/post', function(req, res, next) {
    let db = new Datastore({
        filename: __dirname + '/../db/posts',
        autoload: true
    })

    let _id = req.query._id

    let post = db.remove({_id: _id}, error => {
        if(!error) {
            res.sendStatus(200)
        }
    })
})
module.exports = app
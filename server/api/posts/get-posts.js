const app = require('express')()
const Datastore = require('nedb')

app.get('/posts', function (req, res, next) {
    let db = new Datastore({
        filename: __dirname + '/../db/posts',
        autoload: true
    })

    db.find({}).sort({ createdDate: -1}).exec((error, posts) => {
        if(!error) {
            res.json(posts)
        }
    })
})

module.exports = app
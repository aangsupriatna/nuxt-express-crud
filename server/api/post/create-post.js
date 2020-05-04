const app = require('express')()
const Datastore = require('nedb')

app.post('/post', function (req, res, next) {
    let db = new Datastore({
        filename: __dirname + '/../db/posts',
        autoload: true
    });

    let reqBody = req.body

    db.insert(reqBody, function (err, newDoc) {
        db.persistence.compactDatafile()
        if (!err) return res.json(newDoc)
    })
})

module.exports = app
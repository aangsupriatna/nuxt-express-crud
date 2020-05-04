const app = require('express')()
const Datastore = require('nedb')

app.patch('/post', function(req, res, next) {
    let db = new Datastore({
        filename: __dirname + '/../db/posts',
        autoload: true
    });

    let _id = req.body._id
    let title = req.body.title
    let content = req.body.content

    db.update({ _id: _id}, {$set: {title, content}}, error => {
        db.persistence.compactDatafile()
        if (!error) return res.sendStatus(200)
    })
})
module.exports = app
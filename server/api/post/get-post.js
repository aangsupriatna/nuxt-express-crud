const app = require('express')()
const Datastore = require('nedb')

app.get('/post', (req, res) => {
    let db = new Datastore({
        filename: __dirname + '/../db/posts',
        autoload: true
    });

    let _id = req.query._id

    let post = db.findOne({_id: _id}, function (err, docs) {
        res.json(docs)
    });
})

module.exports = app
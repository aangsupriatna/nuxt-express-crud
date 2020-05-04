const app = require('express')()
const Datastore = require('nedb')

app.get('/users', function (req, res, next) {
    let db = new Datastore({
        filename: __dirname + '/../db/users',
        autoload: true
    })

    db.find({}).sort({ createdDate: -1 }).exec((error, users) => {
        if (!error) {
            res.json(users)
        }
    })
})

module.exports = app
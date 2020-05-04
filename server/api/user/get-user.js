const app = require('express')()
const Datastore = require('nedb')

app.get('/user', (req, res) => {
    let db = new Datastore({
        filename: __dirname + '/../db/users',
        autoload: true
    });

    let _id = req.query._id

    let user = db.findOne({ _id: _id }, function (err, user) {
        res.json(user)
    });
})

module.exports = app
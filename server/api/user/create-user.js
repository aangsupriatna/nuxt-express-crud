const app = require('express')()
const Datastore = require('nedb')
const bcrypt = require('bcryptjs')
const saltRounds = 10

app.post('/user', function (req, res, next) {
    let db = new Datastore({
        filename: __dirname + '/../db/users',
        autoload: true
    });

    let reqBody = req.body
    const hash = bcrypt.hashSync(req.body.password, saltRounds)
    reqBody.password = hash

    db.insert(reqBody, function (err, newDoc) {
        db.persistence.compactDatafile()
        if (!err) return res.json(newDoc)
    })

}),

module.exports = app
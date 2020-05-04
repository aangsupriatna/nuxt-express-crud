const app = require('express')()
const Datastore = require('nedb')

app.patch('/user', function (req, res, next) {
    let db = new Datastore({
        filename: __dirname + '/../db/users',
        autoload: true
    });

    let _id = req.body._id
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    let type = req.body.type
    let updatedDate = req.body.updatedDate

    db.update({ _id: _id }, { $set: { name, email, password, type, updatedDate } }, error => {
        db.persistence.compactDatafile()
        if (!error) return res.sendStatus(200)
    })
})
module.exports = app
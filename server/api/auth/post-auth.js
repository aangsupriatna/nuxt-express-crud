const app = require('express')()
const Datastore = require('nedb')
const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.post('/auth/login', function (req, res, next) {
    let db = new Datastore({
        filename: __dirname + '/../db/users',
        autoload: true
    });

    const username = req.body.name
    const password = req.body.password

    db.findOne({ name: username }, function (err, user) {

        if (user) {
            const valid = bcrypt.compareSync(password, user.password)

            if (valid) {
                const accessToken = jsonwebtoken.sign({ username }, 'dummy')
                res.json({ token: accessToken })
            }
        }
    })
})

app.post('/auth/logout', function (req, res, next) {
    let db = new Datastore({
        filename: __dirname + '/../db/users',
        autoload: true
    });

    let reqBody = req.body

    res.json({ status: 'OK' })

})

module.exports = app
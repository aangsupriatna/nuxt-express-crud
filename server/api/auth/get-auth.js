const app = require('express')()
const Datastore = require('nedb')
const jwt = require('express-jwt')

app.get('/auth/user', jwt({ secret: 'dummy' }), (req, res) => {
    let db = new Datastore({
        filename: __dirname + '/../db/users',
        autoload: true
    });

    let _id = req.query._id

    res.json({ user: req.user })
})

module.exports = app
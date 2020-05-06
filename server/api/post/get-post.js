const app = require('express')()
const Datastore = require('nedb')

app.get('/post', (req, res) => {
    const db = new Datastore({
        filename: __dirname + '/../db/posts',
        autoload: true
    });

    let _id = req.query._id

    const result = new Promise(async (resolve, reject) => {
        await db.findOne({ _id: _id }, function (error, post) {
            if (error) {
                reject(error)
            } else {
                resolve(post)
            }
        })
    })

    try {
        result.then(post => {
            res.json(post)
        })
    } catch(error) {
        reject(error)
    }
})


module.exports = app
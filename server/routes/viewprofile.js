const poll = require('../db')

module.exports = function viewprofile(req, res, next) {

    // validating given id
    if (isNaN(req.params.id))
        res.send({ message: "Not a Number" })

    let id = req.params.id

    // Query for searching user profile.
    poll.query(`SELECT * FROM users WHERE id ='${id}';`, (err, rows, fields) => {
        if (!err) {
            // Object to be shown to user
            let data = {
                id: rows[0].id,
                name: rows[0].name,
                userName: rows[0].username,
                email: rows[0].email,
                photo: rows[0].photo
            }
            res.json(data)
        } else {
            res.send({ message: err.sqlMessage })
            console.log(err)
        }
    })
}
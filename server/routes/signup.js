const poll = require('../db')
const passwordHash = require('password-hash');

module.exports = function signup(req, res, next) {

    let email = req.body.email
    // validating email
    if (!email || !email.match(pattern))
        res.send({ message: 'Please Provide Email' })

    // validating password
    if (!req.body.password)
        res.send({ message: 'Please Enter Password' })

    let fullName = req.body.name
    let userName = req.body.username
    // generating hash password
    let password = passwordHash.generate(req.body.password);
    let photo = req.body.photo

    // Fields to be Updated
    let fields = {
        name: fullName, username: userName,
        email: email, password: password
    };
    if (photo) {
        values['photo'] = photo
        console.log("Added")
    }
    // Query for Inserting User
    poll.query('INSERT INTO users SET ? ', fields, (err, rows, fields) => {
        if (!err) {
            if (rows.affectedRows != 0)
                res.send({ message: "Added User" })
            else
                res.send({ message: "Internal Server" })
        } else {
            res.send({ message: err.sqlMessage })
            console.log(err)
        }
    })
}
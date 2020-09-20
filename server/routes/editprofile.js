const poll = require('../db')
const passwordHash = require('password-hash');
const pattern = require('../utils/data')

module.exports = function editProfile(req, res, next) {

    // validating Token
    if (!req.headers.token) {
        res.send({ message: 'Token is missing' })
        return
        // Write code for verify token
    }

    // validating email
    if (!req.query.email || loginId.match(pattern))

        res.send({ message: "please enter email" })

    let fullName = req.body.name
    let userName = req.body.username
    let email = req.query.email
    let password = passwordHash.generate(req.body.password);

    // Query for Email exists in database
    poll.query(`SELECT * FROM users WHERE email='${email}';`, (err, rows, fields) => {
        if (err) {
            res.send({ message: "Email Not found" })
            return
        }
    })

    // Query for Editing profile
    poll.query(`UPDATE users SET name='${fullName}', username ='${userName}', password='${password}' WHERE email='${email}';`, (err, rows, fields) => {
        if (!err) {
            if (rows.affectedRows != 0)
                res.send({ message: "Updated" })
            else
                res.send({ message: "Internal Error" })
        } else {
            res.send({ message: err.sqlMessage })
            console.log(err)
        }
    })
}


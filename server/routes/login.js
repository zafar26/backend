const passwordHash = require('password-hash');
const poll = require('../db')
const pattern =require('../utils/data')

module.exports = function login(req, res, next) {

    // checking login details is empty or not
    if (!req.body.loginId || !req.body.password)
        res.send({ message: "please enter Login Details" })
    let loginId = req.body.loginId

    let query = ''

    // Checking Wheter it is Email or UserName
    if (loginId.match(pattern)) {
        console.log("hello")
        query = `SELECT * FROM users WHERE email='${loginId}';`
    } else
        query = `SELECT * FROM users WHERE username='${loginId}';`

    // Query for loging in
    poll.query(query, (err, rows, fields) => {
        if (!err) {
            console.log(rows)
            // if multiple users then validating with their given password
            for (let i = 0; i < rows.length; i++) {
                if (passwordHash.verify(req.body.password, rows[i].password))
                    res.send({ message: "Succesfully Login" })
            }
            res.send({ message: "Wrong Password" })
        } else {
            res.send({ message: err.sqlMessage })
            console.log(err)
        }
    })

}

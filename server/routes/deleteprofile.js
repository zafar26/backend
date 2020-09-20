const poll = require('../db')

module.exports = function deleteProfile(req, res, next) {

    // validating id is not a number
    if (isNaN(req.params.id)) {
        res.send({ message: "please enter id Number" })
        return
    }
    // validating token
    if (!req.headers.token) {
        res.send({ message: "Token is missing" })
        return
        // write condition for Verify Token
    }
    // Query for Deleting user
    poll.query(`DELETE from users where id ='${req.params.id}';`, (err, rows, fields) => {
        if (!err) {
            if (rows.affectedRows === 1)
                res.send({ message: "Succesfully Deleted" })
            else
                res.send({ message: "No User for this id" })
        } else {
            res.send({ message: err.sqlMessage })
            console.log(err)
        }
    })
}
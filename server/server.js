const express = require('express')
const app = express()
const routes = require('./routes')

// Declaring and using body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Defining Route
app.use('/', routes)

let port = 3000
// Application Running on port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

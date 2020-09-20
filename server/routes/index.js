const express = require('express');
const router = express.Router();
// Importing functions
const signup = require('./signup')
const login = require('./login')
const editProfile = require('./editprofile')
const viewProfile = require('./viewprofile')
const deleteProfile = require('./deleteprofile')

// Defining Routes
router.post('/signup', signup)
router.get('/login', login)
router.get('/viewprofile/:id', viewProfile)
router.post('/editprofile', editProfile)
router.post('/deleteuser/:id', deleteProfile)

// exporting to server/main.js
module.exports = router;    
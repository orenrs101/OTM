const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.post('/login', (req, res) => {
    console.log("Login Req:", req.body);
    const isLoggedIn = User.login(req.body);
    res.send(isLoggedIn);
});

router.post('/sign-up', (req, res) => {
 res.send();
});

module.exports = router;


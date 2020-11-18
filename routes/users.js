const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/new', usersCtrl.new);

router.post('/signup', usersCtrl.signUp)

router.get('/signin', usersCtrl.signIn);

router.get('/login', usersCtrl.login);

module.exports = router;
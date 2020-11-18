const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/new', usersCtrl.new);

router.post('/signup', usersCtrl.signUp)

router.get('/signin', usersCtrl.signIn);

router.get('/login', usersCtrl.login);

router.get('/home', usersCtrl.home);

router.get('/profile', usersCtrl.profile);
// uArt is the user art submissions
router.get('/uArt', usersCtrl.uArt);
// uStory is the user's story submissions
router.get('/uStory', usersCtrl.uStory);

module.exports = router;
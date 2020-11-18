const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/new', usersCtrl.new);

router.post('/signup', usersCtrl.signUp)

router.get('/signin', usersCtrl.signIn);

router.get('/login', usersCtrl.login);

router.get('/home', usersCtrl.home);

router.get('/profile', usersCtrl.profile);

router.get('/uArt', usersCtrl.uArt);

router.get('/uStory', usersCtrl.uStory);

router.get('/newUp', usersCtrl.newUp);

router.get('/account', usersCtrl.account);

router.get('/contact', usersCtrl.contact);

router.get('/characters', usersCtrl.characters);

router.get('/library', usersCtrl.library);

router.get('/locations', usersCtrl.locations);

router.get('/stories', usersCtrl.stories);

module.exports = router;
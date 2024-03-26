const express = require('express');
const router = express.Router();
const { getHomepage, getSamplepage, } = require('../controllers/home.controller')
const { getCreateUser, postCreateUser } = require('../controllers/create.controller')
const { getUpdatePage } = require('../controllers/update.controller')


router.get('/', getHomepage)
router.get('/test', getSamplepage)
router.post('/create-user', postCreateUser)
router.get('/create', getCreateUser)
router.get('/update/:id', getUpdatePage)

module.exports = router;
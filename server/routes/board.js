const express = require('express')
const router = express.Router()
const {create, get} = require('../handlers/board')

router.post('/create', create)
router.get('/get', get)

  

module.exports = router
const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/snacks')
// const db = require('./db/snacks')

router.get('/', ctrl.getAll)

router.get('/:id', ctrl.getById)

router.post('/', ctrl.create)

router.put('/:id', ctrl.update)

router.delete('/:id', ctrl.deleteById)

module.exports = router
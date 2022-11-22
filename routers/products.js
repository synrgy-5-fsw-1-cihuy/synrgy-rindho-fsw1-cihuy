'use strict';

const express = require('express')
const router = express.Router()

const productsController = require('../controllers/products.controller')

router.get('/', productsController.getAll)

router.get('/:id', productsController.getOne)

router.post('/', productsController.insertOne)

router.put('/:id', productsController.updateFull)

router.patch('/:id', productsController.updatePartial)

router.delete('/:id', productsController.delete)

module.exports = router
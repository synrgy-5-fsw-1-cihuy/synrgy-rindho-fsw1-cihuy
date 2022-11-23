'use strict'

const cloudinaryConfig = require('../config/cloudinary')
const models = require('../models')
const productModel = models.Product
const controller = {}

controller.getAll = async (req, res) => {
    let productData = await productModel.findAll({})

    res.json(productData)
    return
}

controller.getOne = async (req, res) => {
    let params = req.params

    let productData = await productModel.findOne({
        where: {
            'id': params.id
        }
    })

    if (productData == null) {
        res.end('Product not found.')
        return
    }

    res.json(productData)
    return
}

controller.insertOne = async (req, res) => {
    let fields = req.fields

    if(fields.name == undefined || fields.description == undefined || fields.price == undefined) {
        res.end("Data not complete.")
        return
    }

    let data = {
        name: fields.name,
        description: fields.description,
        price: fields.price
    }

    await productModel.create(data)

    res.json(data)
    return
}

controller.updateFull = async (req, res) => {
    let fields = req.fields
    let params = req.params

    if(fields.name == undefined || fields.description == undefined || fields.price == undefined) {
        res.end("Data not complete.")
        return
    }

    let productData = await productModel.findOne({
        where: {
            'id': params.id
        }
    })

    if (productData == null) {
        res.end('Product not found.')
        return
    }

    let data = {
        name: fields.name,
        description: fields.description,
        price: fields.price
    }

    await productModel.update(data, {
        where: {
            'id': params.id
        }
    })
        
    res.json(data)
    return
}

controller.updatePartial = async (req, res) => {
    let fields = req.fields
    let params = req.params

    let productData = await productModel.findOne({
        where: {
            'id': params.id
        }
    })
    
    if (productData == null) {
        res.end('Product not found.')
        return
    }

    let data = {}

    if(fields.name != undefined) {
        data.name = fields.name
    }

    if(fields.description != undefined) {
        data.description = fields.description
    }

    if(fields.price != undefined) {
        data.price = fields.price
    }

    await productModel.update(data, {
        where: {
            'id': params.id
        }
    })
    
    res.json(data)
    return
}

controller.delete = async (req, res) => {
    let params = req.params

    let productData = await productModel.findOne({
        where: {
            'id': params.id
        }
    })

    if (productData == null) {
        res.end('Product not found.')
        return
    }

    await productModel.destroy({
        where: {
            'id': params.id
        }
    })

    res.end('Success deleting product.')
    return
}

module.exports = controller;
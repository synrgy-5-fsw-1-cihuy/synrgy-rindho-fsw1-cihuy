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
    response = data

    res.json(response)
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
    
    productData.name = fields.name
    productData.description = fields.description
    productData.price = fields.price

    await productModel.update(productData, {
        where: {
            'id': params.id
        }
    })
        
    res.json(productData)
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

    if(fields.name != undefined) {
        productData.name = fields.name
    }

    if(fields.description != undefined) {
        productData.description = fields.description
    }

    if(fields.price != undefined) {
        productData.price = fields.price
    }

    await productModel.update(productData, {
        where: {
            'id': params.id
        }
    })
    
    res.json(productData)
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
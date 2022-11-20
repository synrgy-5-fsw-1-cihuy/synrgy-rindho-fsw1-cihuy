'use strict';

const express = require('express')
const router = express.Router()

const models = require('./../models')
const cloudinaryConfig = require('./../config/cloudinary')

const carModel = models.Car

router.get('/', async (req, res) => {
    let carData = await carModel.findAll({})

    res.json(carData)
    return
})

router.get('/:id', async (req, res) => {
    let params = req.params

    let carData = await carModel.findOne({
        where: {
            'id': params.id
        }
    })

    if (carData == null) {
        res.end('Car not found.')
        return
    }

    res.json(carData)
    return
})

router.post('/', async (req, res) => {
    let fields = req.fields
    let files = req.files

    let response = {}

    await cloudinaryConfig.uploader.upload(files.image.path, { folder: "cars" }, async (err, result) => {
        if (!!err) {
            response.message = "Gagal upload file"
            response.data = err

            res.json(response)
            return
        }

        let data = {
            plate: fields.plate,
            manufacture: fields.manufacture,
            model: fields.model,
            image: result.secure_url,
            rentPerDay: fields.rent_per_day,
            capacity: fields.capacity,
            description: fields.description,
            availableAt: fields.available_at,
            transmission: fields.transmission,
            available: fields.available,
            type: fields.type,
            year: fields.year
        }

        await carModel.create(data)
        response = data

        res.json(response)
        return
    })
    return
})

router.put('/:id', async (req, res) => {
    let fields = req.fields
    let files = req.files
    let params = req.params
    let response = {}

    let carData = await carModel.findOne({
        where: {
            'id': params.id
        }
    })

    if (carData == null) {
        res.end('Car not found.')
        return
    }

    let filename = carData.image.split('/').at(-2) + '/' + carData.image.split('/').at(-1).split('.')[0]

    await cloudinaryConfig.uploader.upload(files.image.path, { folder: "cars" }, async (err, result) => {
        if (!!err) {
            response.message = "Gagal upload file"
            response.data = err

            res.json(response)
            return
        }

        let data = {
            plate: fields.plate,
            manufacture: fields.manufacture,
            model: fields.model,
            image: result.secure_url,
            rentPerDay: fields.rent_per_day,
            capacity: fields.capacity,
            description: fields.description,
            availableAt: fields.available_at,
            transmission: fields.transmission,
            available: fields.available,
            type: fields.type,
            year: fields.year
        }

        await carModel.update(data, {
            where: {
                'id': params.id
            }
        })
        response = data

        await cloudinaryConfig.uploader.destroy(filename)
        
        res.json(response)
        return
    })
    return
})

router.patch('/:id', async (req, res) => {
    let fields = req.fields
    let files = req.files
    let params = req.params
    let response = {}

    let carData = await carModel.findOne({
        where: {
            'id': params.id
        }
    })
    
    if (carData == null) {
        res.end('Car not found.')
        return
    }
    
    let filename = carData.image.split('/').at(-2) + '/' + carData.image.split('/').at(-1).split('.')[0]

    let data = {}

    if(fields.plate != undefined) {
        data.plate = fields.plate
    }

    if(fields.manufacture != undefined) {
        data.manufacture = fields.manufacture
    }

    if(fields.model != undefined) {
        data.model = fields.model
    }

    if(fields.rent_per_day != undefined) {
        data.rentPerDay = fields.rent_per_day
    }

    if(fields.capacity != undefined) {
        data.capacity = fields.capacity
    }

    if(fields.description != undefined) {
        data.description = fields.description
    }

    if(fields.available_at != undefined) {
        data.availableAt = fields.available_at
    }

    if(fields.transmission != undefined) {
        data.transmission = fields.transmission
    }

    if(fields.available != undefined) {
        data.available = fields.available
    }

    if(fields.type != undefined) {
        data.type = fields.type
    }

    if(fields.year != undefined) {
        data.year = fields.year
    }

    if(files.image != undefined) {
        await cloudinaryConfig.uploader.upload(files.image.path, { folder: "cars" }, async (err, result) => {
            if (!!err) {
                response.message = "Gagal upload file"
                response.data = err
    
                res.json(response)
                return
            }
    
            data.image = result.secure_url
    
            await carModel.update(data, {
                where: {
                    'id': params.id
                }
            })
            carData = await carModel.findOne({
                where: {
                    'id': params.id
                }
            })
    
            await cloudinaryConfig.uploader.destroy(filename)
            
            res.json(carData)
            return
        })
    } else {
        await carModel.update(data, {
            where: {
                'id': params.id
            }
        })

        carData = await carModel.findOne({
            where: {
                'id': params.id
            }
        })
        
        res.json(carData)
    }
    return
})

router.delete('/:id', async (req, res) => {
    let params = req.params

    let carData = await carModel.findOne({
        where: {
            'id': params.id
        }
    })

    if (carData == null) {
        res.end('Car not found.')
        return
    }

    await carModel.destroy({
        where: {
            'id': params.id
        }
    })

    res.end('Success deleting car.')
    return
})

module.exports = router
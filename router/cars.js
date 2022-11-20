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

    if(fields.plate == undefined || fields.manufacture == undefined || fields.model == undefined || fields.rent_per_day == undefined || fields.capacity == undefined || fields.description == undefined || fields.available_at == undefined || fields.transmission == undefined || fields.available == undefined || fields.type == undefined || fields.year == undefined || files.image == undefined) {
        res.end("Data not complete.")
        return
    }

    await cloudinaryConfig.uploader.upload(files.image.path, { folder: "cars" }, async (err, result) => {
        if (!!err) {
            res.end("Upload image failed.")
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

    if(fields.plate == undefined || fields.manufacture == undefined || fields.model == undefined || fields.rent_per_day == undefined || fields.capacity == undefined || fields.description == undefined || fields.available_at == undefined || fields.transmission == undefined || fields.available == undefined || fields.type == undefined || fields.year == undefined || files.image == undefined) {
        res.end("Data not complete.")
        return
    }

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
    
    carData.rentPerDay = fields.rent_per_day
    carData.capacity = fields.capacity
    carData.description = fields.description
    carData.availableAt = fields.available_at
    carData.transmission = fields.transmission
    carData.available = fields.available
    carData.type = fields.type
    carData.year = fields.year
    carData.plate = fields.plate
    carData.manufacture = fields.manufacture
    carData.model = fields.model

    await cloudinaryConfig.uploader.upload(files.image.path, { folder: "cars" }, async (err, result) => {
        if (!!err) {
            res.end("Upload image failed.")
            return
        }

        carData.image = result.secure_url

        await carModel.update(carData, {
            where: {
                'id': params.id
            }
        })
        
        await cloudinaryConfig.uploader.destroy(filename)
        
        res.json(carData)
        return
    })
    return
})

router.patch('/:id', async (req, res) => {
    let fields = req.fields
    let files = req.files
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
    
    let filename = carData.image.split('/').at(-2) + '/' + carData.image.split('/').at(-1).split('.')[0]

    if(fields.plate != undefined) {
        carData.plate = fields.plate
    }

    if(fields.manufacture != undefined) {
        carData.manufacture = fields.manufacture
    }

    if(fields.model != undefined) {
        carData.model = fields.model
    }

    if(fields.rent_per_day != undefined) {
        carData.rentPerDay = fields.rent_per_day
    }

    if(fields.capacity != undefined) {
        carData.capacity = fields.capacity
    }

    if(fields.description != undefined) {
        carData.description = fields.description
    }

    if(fields.available_at != undefined) {
        carData.availableAt = fields.available_at
    }

    if(fields.transmission != undefined) {
        carData.transmission = fields.transmission
    }

    if(fields.available != undefined) {
        carData.available = fields.available
    }

    if(fields.type != undefined) {
        carData.type = fields.type
    }

    if(fields.year != undefined) {
        carData.year = fields.year
    }

    if(files.image != undefined) {
        await cloudinaryConfig.uploader.upload(files.image.path, { folder: "cars" }, async (err, result) => {
            if (!!err) {
                res.end("Upload image failed.")
                return
            }
    
            carData.image = result.secure_url
    
            await carModel.update(carData, {
                where: {
                    'id': params.id
                }
            })
    
            await cloudinaryConfig.uploader.destroy(filename)
            
            res.json(carData)
            return
        })
    } else {
        await carModel.update(carData, {
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
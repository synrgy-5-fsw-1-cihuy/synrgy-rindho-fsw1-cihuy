'use strict'

const cloudinaryConfig = require('../config/cloudinary')
const models = require('../models')
const carModel = models.Car
const controller = {}

controller.getAll = async (req, res) => {
    let carData = await carModel.findAll({})

    res.json(carData)
    return
}

controller.getOne = async (req, res) => {
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
}

controller.insertOne = async (req, res) => {
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

        res.json(data)
        return
    })
    return
}

controller.updateFull = async (req, res) => {
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

    let data = {
        plate: fields.plate,
        manufacture: fields.manufacture,
        model: fields.model,
        rentPerDay: fields.rent_per_day,
        capacity: fields.capacity,
        description: fields.description,
        availableAt: fields.available_at,
        transmission: fields.transmission,
        available: fields.available,
        type: fields.type,
        year: fields.year
    }

    await cloudinaryConfig.uploader.upload(files.image.path, { folder: "cars" }, async (err, result) => {
        if (!!err) {
            res.end("Upload image failed.")
            return
        }

        data.image = result.secure_url

        await carModel.update(data, {
            where: {
                'id': params.id
            }
        })
        
        await cloudinaryConfig.uploader.destroy(filename)
        
        res.json(data)
        return
    })
    return
}

controller.updatePartial = async (req, res) => {
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
                res.end("Upload image failed.")
                return
            }
    
            data.image = result.secure_url
    
            await carModel.update(data, {
                where: {
                    'id': params.id
                }
            })
    
            await cloudinaryConfig.uploader.destroy(filename)
            
            res.json(data)
            return
        })
    } else {
        await carModel.update(data, {
            where: {
                'id': params.id
            }
        })
        
        res.json(data)
    }
    return
}

controller.delete = async (req, res) => {
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

    await carModel.destroy({
        where: {
            'id': params.id
        }
    })
    
    await cloudinaryConfig.uploader.destroy(filename)

    res.end('Success deleting car.')
    return
}

module.exports = controller;
'use strict';

const cloudinaryConfig = require('../config/cloudinary')
const carService = require('../services/cars.service')
const controller = {}

controller.getAll = async (req, res) => {
    try {
        let data = await carService.carList()

        return res.status(200).json({
            "message" : "Cars found!",
            "data" : data
        })
    } catch (error) {
        return res.status(400).json({ "error": error })
    }
}

controller.getOne = async (req, res) => {
    try {
        let params = req.params

        let data = await carService.oneCarById(params.id)

        if (data == null) {
            throw 'Car not found.'
        }

        return res.status(200).json({
            "message" : "Car found!",
            "data" : data
        })
    } catch (error) {
        return res.status(400).json({ "error": error })
    }
}

controller.insertOne = async (req, res) => {
    try {
        let fields = req.fields
        let files = req.files

        if (fields.plate == undefined || fields.manufacture == undefined || fields.model == undefined || fields.rent_per_day == undefined || fields.capacity == undefined || fields.description == undefined || fields.available_at == undefined || fields.transmission == undefined || fields.available == undefined || fields.type == undefined || fields.year == undefined || files.image == undefined) {
            throw "Data not complete."
        }

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
                throw err
            }

            data.image = result.secure_url
        })

        await carService.insertCar(req.currentUser, data)

        return res.status(200).json({
            "message" : "Success inserting car!",
            "data" : data
        })
    } catch (error) {
        return res.status(400).json({ "error": error })
    }
}

controller.updateFull = async (req, res) => {
    try {
        let fields = req.fields
        let files = req.files
        let params = req.params

        if (fields.plate == undefined || fields.manufacture == undefined || fields.model == undefined || fields.rent_per_day == undefined || fields.capacity == undefined || fields.description == undefined || fields.available_at == undefined || fields.transmission == undefined || fields.available == undefined || fields.type == undefined || fields.year == undefined || files.image == undefined) {
            throw "Data not complete."
        }

        let carData = await carService.oneCarById(params.id)

        if (carData == null) {
            throw 'Car not found.'
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
                throw "Upload image failed."
            }

            data.image = result.secure_url
            
            await cloudinaryConfig.uploader.destroy(filename)
        })

        await carService.updateCarById(req.currentUser, data, params.id)

        return res.status(200).json({
            "message" : "Success updating car!",
            "data" : data
        })
    } catch (error) {
        return res.status(400).json({ "error": error })
    }
}

controller.updatePartial = async (req, res) => {
    try {
        let fields = req.fields
        let files = req.files
        let params = req.params

        let carData = await carService.oneCarById(params.id)

        if (carData == null) {
            throw 'Car not found.'
        }

        let filename = carData.image.split('/').at(-2) + '/' + carData.image.split('/').at(-1).split('.')[0]

        let data = {}

        if (fields.plate != undefined) {
            data.plate = fields.plate
        }

        if (fields.manufacture != undefined) {
            data.manufacture = fields.manufacture
        }

        if (fields.model != undefined) {
            data.model = fields.model
        }

        if (fields.rent_per_day != undefined) {
            data.rentPerDay = fields.rent_per_day
        }

        if (fields.capacity != undefined) {
            data.capacity = fields.capacity
        }

        if (fields.description != undefined) {
            data.description = fields.description
        }

        if (fields.available_at != undefined) {
            data.availableAt = fields.available_at
        }

        if (fields.transmission != undefined) {
            data.transmission = fields.transmission
        }

        if (fields.available != undefined) {
            data.available = fields.available
        }

        if (fields.type != undefined) {
            data.type = fields.type
        }

        if (fields.year != undefined) {
            data.year = fields.year
        }

        if (files.image != undefined) {
            await cloudinaryConfig.uploader.upload(files.image.path, { folder: "cars" }, async (err, result) => {
                if (!!err) {
                    res.end("Upload image failed.")
                    return
                }

                data.image = result.secure_url

                await cloudinaryConfig.uploader.destroy(filename)
            })
        }
        
        await carService.updateCarById(req.currentUser, data, params.id)

        return res.status(200).json({
            "message" : "Success updating car!",
            "data" : data
        })
    } catch (error) {
        return res.status(400).json({ "error": error })
    }

}

controller.delete = async (req, res) => {
    try {
        let params = req.params

        let carData = await carService.oneCarById(params.id)

        if (carData == null) {
            throw 'Car not found.'
        }

        let filename = carData.image.split('/').at(-2) + '/' + carData.image.split('/').at(-1).split('.')[0]

        await cloudinaryConfig.uploader.destroy(filename)

        await carService.deleteCar(req.currentUser, params.id)

        return res.status(200).json({"message" : 'Success deleting car.'})
    } catch (error) {
        return res.status(400).json({ "error": error })
    }
}

module.exports = controller;
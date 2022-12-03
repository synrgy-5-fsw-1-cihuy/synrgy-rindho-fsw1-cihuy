"use strict";

const models = require('../models')
const model = models.Car
const exportModule = {}

exportModule.insertAll = async (datas) => {
    return await model.bulkCreate(datas)
}

exportModule.insertOne = async (data) => {
    return await model.create(data)
}

exportModule.getAll = async () => {
    return await model.findAll()
}

exportModule.getAll = async (where) => {
    return await model.findAll({
        where: where
    })
}

exportModule.getOne = async () => {
    return await model.findOne()
}

exportModule.getOne = async (where) => {
    return await model.findOne({
        where: where
    })
}

exportModule.update = async (data, where) => {
    return await model.update(data, {
        where: where
    })
}

exportModule.delete = async (where) => {
    return await model.destroy({
        where: where
    })
}

module.exports = exportModule
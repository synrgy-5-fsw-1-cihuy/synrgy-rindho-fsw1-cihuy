"use strict";

const repository = require('../repositories/users.repository')
const exportModule = {}

exportModule.oneUserByEmail = async (email) => {
    try {
        if(email === undefined) throw "User email is not defined!"
        return await repository.getOne({"email" : email})
    } catch (error) {
        throw error
    }
}

exportModule.insertUser = async (data) => {
    try {
        if(data === undefined) throw "User data is not defined!"
        return await repository.insertOne(data)
    } catch (error) {
        throw error``
    }
}
``
module.exports = exportModule
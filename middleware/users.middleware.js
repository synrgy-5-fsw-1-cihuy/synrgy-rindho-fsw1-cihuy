'use strict';

const { expressjwt: jwt } = require("express-jwt")

const userService = require('../services/users.service')

require('dotenv').config()

const exportModule = {}

exportModule.checkUser = async (req, res, next) => {
    await jwt({ secret: process.env.JWT_SECRET, algorithms: [process.env.JWT_ALGORITHM] })(req, res, async () => {
        if (req.auth === undefined) return res.sendStatus(401).json({ "error": "Unauthorized access" })
        if (req.auth.id === undefined) return res.sendStatus(401).json({ "error": "Unauthorized access" })
        if (req.auth.email === undefined) return res.sendStatus(401).json({ "error": "Unauthorized access" })
        if (req.auth.role === undefined) return res.sendStatus(401).json({ "error": "Unauthorized access" })
    
        let check = await await userService.oneUserByEmail(req.auth.email)
    
        if (check == null) {
            return res.status(401).json({ "error": "Unauthorized access. Please login again." })
        };
    
        let currentUser = {
            "id" : check.id,
            "email" : check.email,
            "role" : check.role,
        }
        
        console.log(currentUser)
        req.currentUser = currentUser
    
        next()
    })
}

exportModule.isSuperadmin = (req, res, next) => {
    if (req.currentUser === undefined) {
        return res.sendStatus(401).json({ "error": "Unauthorized access" })
    }

    if (req.currentUser.role == 'superadmin') {
        next()
    }

    return res.sendStatus(401).json({ "error": "Unauthorized access" })
}

exportModule.isAdmin = (req, res, next) => {
    if (req.currentUser === undefined) {
        return res.sendStatus(401).json({ "error": "Unauthorized access" })
    }

    if (req.currentUser.role == 'superadmin' || req.currentUser.role == 'admin') {
        next()
    }

    return res.sendStatus(401).json({ "error": "Unauthorized access" })
}

module.exports = exportModule
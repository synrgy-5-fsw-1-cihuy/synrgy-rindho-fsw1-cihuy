'use strict';

const { expressjwt: jwt } = require("express-jwt")

const models = require('../models')
const userModel = models.User

require('dotenv').config()

const exportModule = {}

exportModule.init = jwt({ secret: process.env.JWT_SECRET, algorithms: [process.env.JWT_ALGORITHM] })

exportModule.checkUser = async (req, res, next) => {

    if (!req.auth.id) return res.sendStatus(401).json({ "error": "Unauthorized access" })
    if (!req.auth.email) return res.sendStatus(401).json({ "error": "Unauthorized access" })
    if (!req.auth.role) return res.sendStatus(401).json({ "error": "Unauthorized access" })

    let check = await userModel.findOne({
        where: {
            "email": req.auth.email
        }
    })

    if (check == null) {
        res.status(401).json({ "error": "Unauthorized access. Please login again." })
        return;
    };

    let currentUser = {
        "id" : check.id,
        "email" : check.email,
        "role" : check.role,
    }

    req.currentUser = currentUser

    next()
}

exportModule.isSuperadmin = (req, res, next) => {
    if (req.currentUser == undefined) {
        res.sendStatus(401).json({ "error": "Unauthorized access" })
        return
    }

    if (req.currentUser.role == 'superadmin') {
        next()
        return
    }

    res.sendStatus(401).json({ "error": "Unauthorized access" })
    return
}

exportModule.isAdmin = (req, res, next) => {
    if (req.currentUser == undefined) {
        res.sendStatus(401).json({ "error": "Unauthorized access" })
        return
    }

    if (req.currentUser.role == 'superadmin' || req.currentUser.role == 'admin') {
        next()
        return
    }

    res.sendStatus(401).json({ "error": "Unauthorized access" })
    return
}

module.exports = exportModule
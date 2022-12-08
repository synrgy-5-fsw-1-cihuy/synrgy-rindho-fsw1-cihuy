'use strict';

const jwt = require('jsonwebtoken')
require('dotenv').config()
const { JWT_SECRET = 'qweasdzxcrtyfghvbn', JWT_ALGORITHM = 'HS256' } = process.env

const exportModule = {}

exportModule.sign = (data) => {
    return jwt.sign(data, JWT_SECRET, { expiresIn: '12h', algorithm: JWT_ALGORITHM})
}

module.exports = exportModule
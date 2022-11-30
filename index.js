// Node Modules
const express = require('express')
const formidableMiddleware = require('express-formidable')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const { PORT = 8002 } = process.env

// Custom Modules
const cars = require('./routers/cars')
const products = require('./routers/products')

// Init
const app = express()
app.use(formidableMiddleware())

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Binar Cars Express API with Swagger",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "LogRocket",
                url: "https://logrocket.com",
                email: "info@email.com",
            },
        },
        servers: [
            {
                url: "http://localhost:8002/api/",
            },
        ],
    },
    apis: [
        "./routers/cars.js",
        "./routers/products.js"
    ],
};

const specs = swaggerJsDoc(options);

// Routing
app.use('/api/cars', cars)
app.use('/api/products', products)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT)
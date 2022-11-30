'use strict';
/** 
 *  @swagger
 *  components:
 *      schemas:
 *          Product:
 *              type: object
 *              required:
 *                  - name
 *                  - description
 *                  - price
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the product.
 *                  name:
 *                      type: string
 *                      description: The name of your product.
 *                  description:
 *                      type: string
 *                      description: The description of your product.
 *                  price:
 *                      type: integer
 *                      description: The price of your product.
 *                  createdAt:
 *                      type: integer
 *                      format: timestamptz
 *                      description: The date of the record creation.
 *                  updatedAt:
 *                      type: integer
 *                      format: timestamptz
 *                      description: The date of the record creation.
 */
/**
 *  @swagger
 *  /products:
 *      get:
 *          description: Returns all products from the system that the user has access to
 *          responses:
 *              '200':
 *                  description: List of products
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 */



const express = require('express')
const router = express.Router()

const productsController = require('../controllers/products.controller')

router.get('/', productsController.getAll)

/**
 * @swagger
 *   /products/{id}:
 *      get:
 *        summary: Get posts by id
 *        tags: [Products]
 *        parameters:
 *          - in: path
 *            name: id
 *        responses:
 *          "200":
 *            description: Retrieve posts by id
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Product'
 */
router.get('/:id', productsController.getOne)

router.post('/', productsController.insertOne)

router.put('/:id', productsController.updateFull)

router.patch('/:id', productsController.updatePartial)

router.delete('/:id', productsController.delete)

module.exports = router
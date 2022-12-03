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

const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products.controller');

/**
 *  @swagger
 *  /products:
 *      get:
 *          description: Returns all products from the system that the user has access to
 *          tags: [Products]
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
router.get('/', productsController.getAll);

/**
 * @swagger
 *   /products/{id}:
 *      get:
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
router.get('/:id', productsController.getOne);

/**
 *  @swagger
 *  /products:
 *      post:
 *          description: Insert one product to the system
 *          tags: [Products]
 *          requestBody:
 *              required: true
 *              content:
 *                  'multipart/form-data':
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *                      examples:
 *                          shoes:
 *                              summary: Shoes product.
 *                              value:
 *                                  name: Shoes
 *                                  description: this is shoes
 *                                  price: 5000
 *          responses:
 *              '200':
 *                  description: Product object inserted
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Product'
 */
router.post('/', productsController.insertOne);

/** 
 *  @swagger
 *  /products/{id}:
 *      put:
 *          description: Update a product from the system that the user has access to
 *          tags: [Products]
 *          parameters:
 *              - name: id
 *                in: path
 *                required: false
 *          requestBody:
 *              description: product data to be update
 *              required: true
 *              content:
 *                  'multipart/form-data':
 *                      examples:
 *                          aqua:
 *                              summary: Aqua product.
 *                              value:
 *                                  name: Aqua
 *                                  description: Air pegunungan
 *                                  price: 3000
 * 
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          responses:
 *              '200':
 *                  description: Send back updated product
 *                  content:
 *                      'application/json':
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 * 
 */
router.put('/:id', productsController.updateFull);

/**
 *  @swagger
 *  /products/{id}:
 *      patch:
 *          description: Update a product from the system that the user has access to
 *          tags: [Products]
 *          parameters:
 *              - name: id
 *                in: path
 *                required: true
 *          requestBody:
 *              description: product data to be update
 *              content:
 *                  'multipart/form-data':
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *                      examples:
 *                          aqua:
 *                              summary: Aqua product.
 *                              value:
 *                                  name: Aqua
 *                                  description: Air pegunungan
 *                                  price: 3000
 *                          bakwan:
 *                              summary: Bakwan product.
 *                              value:
 *                                  name: Bakwan
 *                                  description: panas enak
 *                                  price: 1500
 *          responses:
 *              '200':
 *                  description: Send back updated product.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 */
router.patch('/:id', productsController.updatePartial);

/**
 *  @swagger
 *  /products/{id}:
 *      delete:
 *          description: Delete one product from the system that the user has access to
 *          tags: [Products]
 *          parameters:
 *              - name: id
 *                in: path
 *                description: Id of product to get.
 *                required: true
 *          responses:
 *              '200':
 *                  description: Product object
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Product'
 */
router.delete('/:id', productsController.delete)

module.exports = router

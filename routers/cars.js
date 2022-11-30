'use strict';
/** 
 *  @swagger
 *  components:
 *      schemas:
 *          Car:
 *              type: object
 *              required:
 *                  - plate
 *                  - manufacture
 *                  - model
 *                  - image
 *                  - rentPerDay
 *                  - capacity
 *                  - description
 *                  - availableAt
 *                  - transmission
 *                  - available
 *                  - type
 *                  - year
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the car.
 *                  plate:
 *                      type: string
 *                      description: The plate number of your car.
 *                  manufacture:
 *                      type: string
 *                      description: The manufacture of your car.
 *                  model:
 *                      type: string
 *                      description: The model of your car.
 *                  image:
 *                      type: string
 *                      description: The image url of your car.
 *                  rentPerDay:
 *                      type: integer
 *                      description: Rent cost per day of your car.
 *                  capacity:
 *                      type: integer
 *                      description: The capacity of your car.
 *                  description:
 *                      type: string
 *                      description: The description of your car.
 *                  availableAt:
 *                      type: integer
 *                      format: timestamptz
 *                      description: The date of the car available from.
 *                  transmission:
 *                      type: string
 *                      description: The transmission of your car.
 *                  available:
 *                      type: boolean
 *                      description: Available status of your car.
 *                  type:
 *                      type: string
 *                      description: The type of your car.
 *                  year:
 *                      type: integer
 *                      description: Production year of your car.
 *                  createdAt:
 *                      type: integer
 *                      format: timestamptz
 *                      description: The date of the record creation.
 *                  updatedAt:
 *                      type: integer
 *                      format: timestamptz
 *                      description: The date of the record creation.
 */

const express = require('express')
const router = express.Router()

const carsController = require('../controllers/cars.controller')

/**
 *  @swagger
 *  /cars:
 *      get:
 *          description: Returns all cars from the system that the user has access to
 *          tags: [Cars]
 *          responses:
 *              '200':
 *                  description: List of cars
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Car'
 */
router.get('/', carsController.getAll)

/**
 *  @swagger
 *  /cars/{id}:
 *      get:
 *          description: Returns one car from the system that the user has access to
 *          tags: [Cars]
 *          parameters:
 *              - name: id
 *                in: query
 *                description: Id of car to get.
 *                required: true
 *          responses:
 *              '200':
 *                  description: Car object
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Car'
 */
router.get('/:id', carsController.getOne)

/**
 *  @swagger
 *  /cars:
 *      post:
 *          description: Insert one car to the system
 *          tags: [Cars]
 *          parameters:
 *              - name: plate
 *                in: query
 *                required: true
 *                description: The plate number of your car.
 *              - name: manufacture
 *                in: query
 *                required: true
 *                description: The manufacture of your car.
 *              - name: model
 *                in: query
 *                required: true
 *                description: The model of your car.
 *              - name: image
 *                in: query
 *                required: true
 *                description: The image url of your car.
 *              - name: rent_per_day
 *                in: query
 *                required: true
 *                description: Rent cost per day of your car.
 *              - name: capacity
 *                in: query
 *                required: true
 *                description: The capacity of your car.
 *              - name: description
 *                in: query
 *                required: true
 *                description: The description of your car.
 *              - name: available_at
 *                in: query
 *                required: true
 *                description: The date of the car available from.
 *              - name: transmission
 *                in: query
 *                required: true
 *                description: The transmission of your car.
 *              - name: available
 *                in: query
 *                required: true
 *                description: Available status of your car.
 *              - name: type
 *                in: query
 *                required: true
 *                description: The type of your car.
 *              - name: year
 *                in: query
 *                required: true
 *                description: Production year of your car.
 *          responses:
 *              '200':
 *                  description: Car object inserted
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Car'
 */
router.post('/', carsController.insertOne)

router.put('/:id', carsController.updateFull)

router.patch('/:id', carsController.updatePartial)

router.delete('/:id', carsController.delete)

module.exports = router
'use strict';

/** 
 *  @swagger
 *  components:
 *      schemas:
 *          User:
 *              type: object
 *              required:
 *                  - email
 *                  - password
 *                  - role
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the user.
 *                  email:
 *                      type: string
 *                      description: The email of your user.
 *                  password:
 *                      type: string
 *                      description: The password of your user.
 *                  role:
 *                      type: string
 *                      description: The role of your user.
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

const usersMiddleware = require('../middleware/users.middleware')
const usersController = require('../controllers/users.controller')

router.get('/test',
    usersMiddleware.init,
    usersMiddleware.checkUser,
    usersMiddleware.isSuperadmin,
    async (req, res) => {
        res.json(req.currentUser)
        return
    }
)

/**
 *  @swagger
 *  /users/register/admin:
 *      post:
 *          description: Registering a admin user
 *          tags: [Users]
 *          requestBody:
 *              required: true
 *              content:
 *                  'multipart/form-data':
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *                      examples:
 *                          rindho:
 *                              summary: User Rindho
 *                              value:
 *                                  email: rindho.ananta@gmail.com
 *                                  password: 12345
 *          responses:
 *              '200':
 *                  description: JSON Web Token
 *                  content:
 *                      application/json: {}
 */
router.post('/register/admin',
    usersMiddleware.init,
    usersMiddleware.checkUser,
    usersMiddleware.isSuperadmin,
    usersController.registerAdmin
)

/**
 *  @swagger
 *  /users/register/member:
 *      post:
 *          description: Registering a member user
 *          tags: [Users]
 *          requestBody:
 *              required: true
 *              content:
 *                  'multipart/form-data':
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *                      examples:
 *                          rindho:
 *                              summary: User Rindho
 *                              value:
 *                                  email: rindo.ananta@gmail.com
 *                                  password: 12345
 *          responses:
 *              '200':
 *                  description: JSON Web Token
 *                  content:
 *                      application/json: {}
 */
router.post('/register/member',
    usersController.registerMember
)

/**
 *  @swagger
 *  /users/login:
 *      post:
 *          description: Login user to the system
 *          tags: [Users]
 *          requestBody:
 *              required: true
 *              content:
 *                  'multipart/form-data':
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *                      examples:
 *                          rindho:
 *                              summary: User Rindho
 *                              value:
 *                                  email: rindho.ananta@ti.ukdw.ac.id
 *                                  password: 12345
 *          responses:
 *              '200':
 *                  description: JSON Web Token
 *                  content:
 *                      application/json: {}
 */
router.post('/login',
    usersController.login
)

/**
 *  @swagger
 *  /users/me:
 *      get:
 *          description: Returns current user token.
 *          tags: [Users]
 *          responses:
 *              '200':
 *                  description: Car object
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 */
router.get('/me',
    usersMiddleware.init,
    usersMiddleware.checkUser,
    usersController.me
)

module.exports = router
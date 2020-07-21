/*********************USER ROUTES***************************/
const express = require('express')
const router = express.Router();
const registerNewUser = require("../../services/implementation/registerNewUser");

/**
 * @swagger
 * /user/registration:
 *  post:
 *      description: Register a user by posting user details using body parameters
 *      parameters:
 *          -   in: body
 *              name: body
 *              description: body object with user details to register
 *              schema:
 *                  $ref: "#/definitions/registerUser"
 *      responses:
 *          200:
 *              description: OK
 *          400: 
 *              description: Errors in submitted fields. Check response body for more details
 *          401:
 *              description: Account already Exists
 *          500:
 *              description: Internal server error
 */
router.post("/registration", (req, res) => {

    registerNewUser(req, res);
});

module.exports=router;
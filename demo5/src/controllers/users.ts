import express, { NextFunction, Request, Response } from "express";
import UserService from "../services/user";

const controller = express.Router();

/**
 * @route POST /users/login
 * @group user
 * @param {string} username.query.required - username
 * @param {string} password.query.required - user's password.
 * @returns {object} 200 - verify result
 * @returns {Error}  default - Unexpected error
 */
controller.post("/login", function (req: Request, res: Response, next: NextFunction) {
    UserService.login();

    res.json({
        code: 200,
        data: "user login.",
    });
});

/**
 * @route GET /users/{userId}
 * @group user
 * @param {integer} userId.path.required - userId
 * @returns {object} 200 - verify result
 * @returns {Error}  default - Unexpected error
 */
controller.get("/:userId", function (req: Request, res: Response, next: NextFunction) {
    console.log("req.params: ", req.params);
    console.log("req.query: ", req.query);

    res.json({
        code: 200,
        data: "user find.",
    });
});

export default controller;

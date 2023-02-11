import express, { NextFunction, Request, Response } from "express";
import UserService from "../services/user";

const controller = express.Router();

/**
 * @route POST /users/login
 * @group user
 * @param {LoginParams.model} LoginParams.body.required
 * @returns {object} 200 - verify result
 * @returns {Error}  default - Unexpected error
 */
controller.post("/login", async (request: Request, response: Response, next: NextFunction) => {
    const token = await UserService.login(request.body);
    if (token) {
        response.json({ code: 200, data: token, message: "user login." });
    } else {
        response.json({ code: 500, message: "userName or password error." });
    }
});

/**
 * @route GET /users/{userId}
 * @group user
 * @param {integer} userId.path.required - userId
 * @returns {object} 200 - verify result
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
controller.get("/:userId", async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params;
    const user = await UserService.getUserById(Number(userId));
    res.json({
        code: 200,
        data: user,
    });
});

export default controller;

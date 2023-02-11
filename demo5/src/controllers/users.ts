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
    const result = await UserService.login(request.body);
    response.json({
        code: 200,
        data: result ? "user login." : "userName or password error.",
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

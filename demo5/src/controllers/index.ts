import express, { NextFunction, Request, Response } from "express";
import usersController from "./users";
import goodsController from "./goods";

const controller = express.Router();

controller.use(usersController, goodsController);

/**
 * @route GET /
 * @group root path
 * @returns {object} 200 - Welcome to visit.
 * @returns {Error}  default - Unexpected error
 */
controller.get("/", function (req: Request, res: Response, next: NextFunction) {
    res.json({
        code: 200,
        data: "Welcome to visit.",
    });
});

export default controller;

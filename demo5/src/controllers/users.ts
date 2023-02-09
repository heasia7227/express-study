import express, { NextFunction, Request, Response } from "express";
import UserService from "../services/user";

const controller = express.Router();

controller.get("/users", function (req: Request, res: Response, next: NextFunction) {
    UserService.login();

    res.json({
        code: 200,
        data: "user login.",
    });
});

export default controller;

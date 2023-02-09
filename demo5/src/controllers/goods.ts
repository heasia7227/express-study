import express, { NextFunction, Request, Response } from "express";

const controller = express.Router();

controller.get("/goods", function (req: Request, res: Response, next: NextFunction) {
    res.json({
        code: 200,
        data: "goods list111.",
    });
});

export default controller;

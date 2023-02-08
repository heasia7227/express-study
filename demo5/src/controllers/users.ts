import express, { NextFunction, Request, Response } from "express";
import UserService from "../services/user";
const router = express.Router();

router.get("/", function (req: Request, res: Response, next: NextFunction) {
    UserService.login();

    res.json({
        code: 200,
        data: "user login.",
    });
});

export default router;

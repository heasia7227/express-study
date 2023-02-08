import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

router.get("/", function (req: Request, res: Response, next: NextFunction) {
    res.json({
        code: 200,
        data: "Welcome to visit.",
    });
});

export default router;

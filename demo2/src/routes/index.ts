import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.json({
        code: 200,
        data: "json data",
    });
});

export default router;

import express, { NextFunction, Request, Response } from "express";
import address from "../models/address";
const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    address.findAll().then((data) => {
        res.json({
            code: 200,
            data,
        });
    });
});

export default router;

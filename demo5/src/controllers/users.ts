import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});

export default router;

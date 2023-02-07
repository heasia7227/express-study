import express, { NextFunction, Request, Response } from "express";
import { QueryTypes } from "sequelize";
import sequelize from "../db/mssql";
const router = express.Router();

router.get("/", function (req: Request, res: Response, next: NextFunction) {
    sequelize.query(`SELECT * FROM test_table1 WHERE ID = 1`, { type: QueryTypes.SELECT }).then((data) => {
        res.json({
            code: 200,
            data,
        });
    });
});

export default router;

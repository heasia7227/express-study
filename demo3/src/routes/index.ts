import express, { NextFunction, Request, Response } from "express";
import mssql, { querySql } from "../db/mssql";
const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    querySql("select * from test_table1", [], (err?: Error, result?: mssql.IProcedureResult<any>) => {
        res.json({
            code: 200,
            data: result,
        });
    });
});

export default router;

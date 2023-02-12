import express, { NextFunction, Request, Response } from "express";
import GoodsService from "../services/goods";
const controller = express.Router();

/**
 * @route GET /goods
 * @group goods
 * @returns {object} 200 - goods items
 * @returns {Error}  default - Unexpected error
 */
controller.get("/", async (request: Request, response: Response, next: NextFunction) => {
    const goodsList = await GoodsService.getGoodsList();
    response.json({
        code: 200,
        data: goodsList,
    });
});

export default controller;

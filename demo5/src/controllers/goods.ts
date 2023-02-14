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

/**
 * @route GET /goods/{goodsId}
 * @group goods
 * @param {integer} goodsId.path.required - goodsId
 * @returns {object} 200 - goods detail
 * @returns {Error}  default - Unexpected error
 */
controller.get("/:goodsId", async (request: Request, response: Response, next: NextFunction) => {
    const { goodsId } = request.params;
    const goods = await GoodsService.getGoods(Number(goodsId));
    response.json({
        code: 200,
        data: goods,
    });
});

/**
 * @route POST /goods
 * @group goods
 * @param {GoodsAddCommand.model} GoodsAddCommand.body.required
 * @returns {object} 200 - add goods result
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
controller.post("/", async (request: Request, response: Response, next: NextFunction) => {
    const result = await GoodsService.addGoods(request.body);
    response.json({
        code: 200,
        data: result,
    });
});

/**
 * @route PUT /goods
 * @group goods
 * @param {GoodsEditCommand.model} GoodsEditCommand.body.required
 * @returns {object} 200 - edit goods result
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
controller.put("/", async (request: Request, response: Response, next: NextFunction) => {
    const result = await GoodsService.editGoods(request.body);
    response.json({
        code: 200,
        data: result,
    });
});

export default controller;

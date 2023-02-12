import { IGoods } from "../interfaces/goods";
import Category from "../models/category";
import Goods from "../models/goods";

const GoodsService = {
    getGoodsList: async (): Promise<Array<IGoods>> => {
        const data = await Goods.findAll({
            include: [
                {
                    model: Category,
                    as: "category",
                },
            ],
        });
        return data.map((item) => item.getGoods());
    },
};

export default GoodsService;

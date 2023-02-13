import { IGoods } from "../interfaces/goods";
import { Category, Goods } from "../models";

const GoodsService = {
    getGoodsList: async (): Promise<Array<IGoods>> => {
        const data = await Goods.findAll({
            include: [
                {
                    association: Goods.category,
                    as: "category",
                },
                {
                    association: Goods.pictures,
                    as: "pictures",
                },
            ],
        });
        return data.map((item) => item.dataValues);
    },
    getGoods: async (goodsId: number): Promise<IGoods> => {
        const data = await Goods.findByPk(goodsId, {
            include: [
                {
                    association: Goods.category,
                    as: "category",
                },
                {
                    association: Goods.pictures,
                    as: "pictures",
                },
            ],
        });
        return data?.dataValues;
    },
};

export default GoodsService;

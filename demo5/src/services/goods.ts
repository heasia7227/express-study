import { IGoods, IGoodsAddCommand } from "../interfaces/goods";
import { Goods, GoodsComment } from "../models";

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
                    where: { isCover: 1 },
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
                {
                    association: Goods.comments,
                    as: "comments",
                    include: [
                        {
                            association: GoodsComment.user,
                            as: "user",
                        },
                    ],
                },
            ],
        });
        return data?.dataValues;
    },
    addGoods: async (goods: IGoodsAddCommand): Promise<boolean> => {
        const newGoods = await Goods.create(goods as any, {
            include: [
                {
                    association: Goods.pictures,
                    as: "pictures",
                },
            ],
        });
        console.log("newGoods: ", newGoods);
        return true;
    },
};

export default GoodsService;

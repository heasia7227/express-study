import { IGoods, IGoodsAddCommand, IGoodsEditCommand } from "../interfaces/goods";
import { Goods, GoodsComment, GoodsPicture } from "../models";

const GoodsService = {
    getGoodsList: async (): Promise<Array<IGoods>> => {
        const data = await Goods.findAll({
            where: { state: 0 },
            include: [
                {
                    association: Goods.Category,
                    as: "category",
                },
                {
                    association: Goods.Pictures,
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
                    association: Goods.Category,
                    as: "category",
                },
                {
                    association: Goods.Pictures,
                    as: "pictures",
                },
                {
                    association: Goods.Comments,
                    as: "comments",
                    include: [
                        {
                            association: GoodsComment.User,
                            as: "user",
                        },
                    ],
                },
            ],
        });
        return data?.dataValues;
    },
    addGoods: async (goodsAddCommand: IGoodsAddCommand): Promise<boolean> => {
        try {
            goodsAddCommand.state = 0;
            await Goods.create(goodsAddCommand as any, {
                include: [
                    {
                        association: Goods.Pictures,
                        as: "pictures",
                    },
                ],
            });
            return true;
        } catch (e) {
            return false;
        }
    },
    editGoods: async (goodsEditCommand: IGoodsEditCommand): Promise<boolean> => {
        // https://github.com/sequelize/sequelize/issues/11836
        try {
            const goods = await Goods.findByPk(goodsEditCommand?.id, {
                include: [
                    {
                        association: Goods.Pictures,
                        as: "pictures",
                    },
                ],
            });
            const toDelete =
                goods?.pictures?.filter(
                    (item) => !goodsEditCommand?.pictures?.some((element) => element.id === item.id)
                ) || [];
            const toUpdate =
                goods?.pictures?.filter((item) =>
                    goodsEditCommand?.pictures?.some((element) => element.id === item.id)
                ) || [];
            const toCreate = goodsEditCommand?.pictures?.filter((item) => !item.id);

            for (let item of toDelete) {
                await item.destroy();
            }
            for (let item of toUpdate) {
                await item.update(goodsEditCommand?.pictures?.find((element) => element.id === item.id));
            }
            for (let item of toCreate) {
                await GoodsPicture.create({ ...item, goodsId: goodsEditCommand?.id });
            }

            await goods?.update(goodsEditCommand);
            await goods?.save();
            return true;
        } catch (e) {
            return false;
        }
    },
    deleteGoods: async (goodsId: number): Promise<boolean> => {
        try {
            const goods = await Goods.findByPk(goodsId);
            if (goods) {
                goods.state = -1; //delete flag
                await goods?.update(goods);
                return true;
            }
            return false;
        } catch (e) {
            return false;
        }
    },
};

export default GoodsService;

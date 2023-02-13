import { DataTypes, Sequelize } from "sequelize";

const GoodsCommentModel = (sequelize: Sequelize) => {
    return sequelize.define(
        "comment",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            comment: DataTypes.STRING,
            commentTime: DataTypes.STRING,
            stars: DataTypes.INTEGER,
            userId: {
                type: DataTypes.INTEGER,
                field: "user_id",
            },
            goodsId: {
                type: DataTypes.INTEGER,
                field: "goods_id",
            },
            orderId: {
                type: DataTypes.INTEGER,
                field: "order_id",
            },
        },
        {
            tableName: "t_goods_comment",
            createdAt: false,
            updatedAt: false,
        }
    );
};

export default GoodsCommentModel;

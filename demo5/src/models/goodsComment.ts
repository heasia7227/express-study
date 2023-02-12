import { DataTypes, Model } from "sequelize";
import sequelize from "../db/sqlite";
import { IGoodsComment } from "../interfaces/goodsComment";
import User from "./user";

class GoodsComment extends Model {
    getComment(): IGoodsComment {
        return this.dataValues;
    }
}

GoodsComment.init(
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
        sequelize,
        tableName: "t_goods_comment",
        createdAt: false,
        updatedAt: false,
    }
);

GoodsComment.belongsTo(User);

export default GoodsComment;

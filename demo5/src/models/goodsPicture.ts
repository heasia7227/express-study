import { DataTypes, Model } from "sequelize";
import sequelize from "../db/sqlite";
import { IGoodsPicture } from "../interfaces/goodsPicture";

class GoodsPicture extends Model {
    getPicture(): IGoodsPicture {
        return this.dataValues;
    }
}

GoodsPicture.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        path: DataTypes.STRING,
        isCover: DataTypes.INTEGER,
        goodsId: {
            type: DataTypes.INTEGER,
            field: "goods_id",
        },
    },
    {
        sequelize,
        tableName: "t_goods_picture",
        createdAt: false,
        updatedAt: false,
    }
);

export default GoodsPicture;

import { DataTypes, Model } from "sequelize";
import sequelize from "../db/sqlite";
import { IGoods } from "../interfaces/goods";
import Category from "./category";
import GoodsComment from "./goodsComment";
import GoodsPicture from "./goodsPicture";

class Goods extends Model {
    getGoods(): IGoods {
        return this.dataValues;
    }
}

Goods.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: DataTypes.STRING,
        price: DataTypes.INTEGER,
        state: DataTypes.INTEGER,
        remark: DataTypes.STRING,
        detail: DataTypes.STRING,
    },
    {
        sequelize,
        tableName: "t_goods",
        modelName: "goods",
        createdAt: false,
        updatedAt: false,
    }
);

Goods.belongsTo(Category, {
    foreignKey: { name: "categoryId", field: "category_id" },
});
// Goods.hasMany(GoodsComment);
// Goods.hasMany(GoodsPicture);

export default Goods;

import { DataTypes, Model } from "sequelize";
import sequelize from "../db/sqlite";
import { ICategory } from "../interfaces/category";
import Goods from "./goods";

class Category extends Model {
    getCategory(): ICategory {
        return this.dataValues;
    }
}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        categoryName: {
            type: DataTypes.STRING,
            field: "category_name",
        },
        categoryIcon: {
            type: DataTypes.STRING,
            field: "category_icon",
        },
        state: DataTypes.INTEGER,
    },
    {
        sequelize,
        tableName: "t_category",
        modelName: "category",
        createdAt: false,
        updatedAt: false,
    }
);

// Category.hasMany(Goods);

export default Category;

import { DataTypes, Sequelize } from "sequelize";

const CategoryModel = (sequelize: Sequelize) => {
    return sequelize.define(
        "category",
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
            tableName: "t_category",
            createdAt: false,
            updatedAt: false,
        }
    );
};

export default CategoryModel;

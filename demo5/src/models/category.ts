import { DataTypes, Model, Sequelize } from "sequelize";

const CategoryModel = (sequelize: Sequelize) => {
    class Category extends Model {}
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
    return Category;
};

export default CategoryModel;

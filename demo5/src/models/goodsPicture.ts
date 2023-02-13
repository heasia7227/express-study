import { DataTypes, Sequelize } from "sequelize";

const GoodsPictureModel = (sequelize: Sequelize) => {
    return sequelize.define(
        "picture",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            path: DataTypes.STRING,
            isCover: {
                type: DataTypes.INTEGER,
                field: "is_cover",
            },
        },
        {
            tableName: "t_goods_picture",
            createdAt: false,
            updatedAt: false,
        }
    );
};

export default GoodsPictureModel;

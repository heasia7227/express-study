import { DataTypes, Model, Sequelize } from "sequelize";

const GoodsPictureModel = (sequelize: Sequelize) => {
    class GoodsPicture extends Model {}
    GoodsPicture.init(
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
            sequelize,
            tableName: "t_goods_picture",
            modelName: "picture",
            createdAt: false,
            updatedAt: false,
        }
    );
    return GoodsPicture;
};

export default GoodsPictureModel;

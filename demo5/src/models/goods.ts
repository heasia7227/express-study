import { DataTypes, Model, Sequelize } from "sequelize";

const GoodsModel = (sequelize: Sequelize) => {
    class Goods extends Model {
        declare static category: any;
        declare static pictures: any;
        declare static comments: any;
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
    return Goods;
};

export default GoodsModel;

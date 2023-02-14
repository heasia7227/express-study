import { DataTypes, Model, Sequelize } from "sequelize";

const GoodsCommentModel = (sequelize: Sequelize) => {
    class GoodsComment extends Model {
        declare static User: any;
    }

    GoodsComment.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            comment: DataTypes.STRING,
            commentTime: {
                type: DataTypes.STRING,
                field: "comment_time",
            },
            stars: DataTypes.INTEGER,
            orderId: {
                type: DataTypes.INTEGER,
                field: "order_id",
            },
        },
        {
            sequelize,
            tableName: "t_goods_comment",
            modelName: "comment",
            createdAt: false,
            updatedAt: false,
        }
    );
    return GoodsComment;
};

export default GoodsCommentModel;

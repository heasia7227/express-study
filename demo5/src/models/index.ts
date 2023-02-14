import { Sequelize } from "sequelize";
import CategoryModel from "./category";
import GoodsModel from "./goods";
import GoodsCommentModel from "./goodsComment";
import GoodsPictureModel from "./goodsPicture";
import UserModel from "./user";

const sequelize = new Sequelize({ dialect: "sqlite", storage: "src/db/database.sqlite" });
console.log("-----sqlite init done-----");

const User = UserModel(sequelize);
const Category = CategoryModel(sequelize);
const Goods = GoodsModel(sequelize);
const GoodsComment = GoodsCommentModel(sequelize);
const GoodsPicture = GoodsPictureModel(sequelize);

Goods.Category = Goods.belongsTo(Category, {
    foreignKey: { name: "categoryId", field: "category_id" },
});
Goods.Pictures = Goods.hasMany(GoodsPicture, {
    foreignKey: { name: "goodsId", field: "goods_id" },
});
Goods.Comments = Goods.hasMany(GoodsComment, {
    foreignKey: { name: "goodsId", field: "goods_id" },
});

GoodsPicture.Goods = GoodsPicture.belongsTo(Goods, {
    foreignKey: { name: "goodsId", field: "goods_id" },
});

GoodsComment.User = GoodsComment.belongsTo(User, {
    foreignKey: { name: "userId", field: "user_id" },
});

export { User, Category, Goods, GoodsComment, GoodsPicture };
export default sequelize;

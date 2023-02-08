/**
 * sqlserver Model
 **/
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({ dialect: "sqlite", storage: "src/db/database.sqlite" });
console.log("-----sqlserver init done-----");

export default sequelize;

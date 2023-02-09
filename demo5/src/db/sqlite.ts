import { Sequelize } from "sequelize";

const sequelize = new Sequelize({ dialect: "sqlite", storage: "src/db/database.sqlite" });
console.log("-----sqlite init done-----");

export default sequelize;

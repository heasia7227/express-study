/**
 * sqlserver Model
 **/
import { Sequelize } from "sequelize";
import conf from "../config";

const sequelize = new Sequelize(conf.mssqlConfig);
console.log("-----sqlserver init done-----");

export default sequelize;

import { DataTypes } from "sequelize";
import sequelize from "../db/mssql";

const Address = sequelize.define(
    "Address",
    {
        UserName: DataTypes.STRING,
        Email: DataTypes.STRING,
    },
    {
        tableName: "test_table1",
        createdAt: false,
        updatedAt: false,
    }
);

export default Address;

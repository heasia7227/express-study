import { DataTypes, Model } from "sequelize";
import sequelize from "../db/sqlite";
import { IUser } from "../interfaces/user";

class User extends Model {
    getUser(): IUser {
        return this.dataValues;
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: {
            type: DataTypes.STRING,
            field: "user_name",
        },
        avatar: DataTypes.STRING,
        tel: DataTypes.STRING,
        email: DataTypes.STRING,
        nickName: {
            type: DataTypes.STRING,
            field: "nick_name",
        },
        gender: DataTypes.STRING,
        birthday: DataTypes.STRING,
        createAt: {
            type: DataTypes.STRING,
            field: "create_at",
        },
        updateAt: {
            type: DataTypes.STRING,
            field: "update_at",
        },
    },
    {
        sequelize,
        tableName: "t_user",
        createdAt: false,
        updatedAt: false,
    }
);

export default User;

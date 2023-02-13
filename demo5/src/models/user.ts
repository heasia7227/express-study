import { DataTypes, Sequelize } from "sequelize";

const UserModel = (sequelize: Sequelize) => {
    return sequelize.define(
        "user",
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
            tableName: "t_user",
            createdAt: false,
            updatedAt: false,
        }
    );
};

export default UserModel;

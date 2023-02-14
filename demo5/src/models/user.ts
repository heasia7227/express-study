import { DataTypes, Model, Sequelize } from "sequelize";

const UserModel = (sequelize: Sequelize) => {
    class User extends Model {}
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
            modelName: "user",
            createdAt: false,
            updatedAt: false,
        }
    );
    return User;
};

export default UserModel;

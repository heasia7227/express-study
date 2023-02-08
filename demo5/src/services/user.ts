import User from "../models/user";

const UserService = {
    login: () => {
        console.log("UserService login");
        User.findOne({ where: { userName: "arthur", password: "123" } }).then((data) => {
            console.log("findOne data: ", data);
        });
    },
};

export default UserService;

import User from "../models/user";

const UserService = {
    login: async (userName: string, password: string) => {
        if (!userName || !password) {
            return false;
        }
        const data = await User.findOne({ where: { userName, password } });
        return !!data?.dataValues;
    },
};

export default UserService;

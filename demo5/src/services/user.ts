import { ILoginParams } from "../interfaces/user";
import User from "../models/user";

const UserService = {
    login: async (loginParams: ILoginParams) => {
        const { userName, password } = loginParams;
        if (!userName || !password) {
            return false;
        }
        const data = await User.findOne({ where: { userName, password } });
        const user = data?.getUser();
        return typeof user !== "undefined" && user !== null;
    },
};

export default UserService;

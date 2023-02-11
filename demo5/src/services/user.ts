import { ILoginParams } from "../interfaces/user";
import User from "../models/user";
import TokenService from "./token";

const UserService = {
    login: async (loginParams: ILoginParams): Promise<string> => {
        const { userName, password } = loginParams;
        if (!userName || !password) {
            return "";
        }
        const data = await User.findOne({ where: { userName, password } });
        const token = TokenService.generateToken(data?.getUser());
        return token;
    },
    getUserById: async (id: number) => {
        const data = await User.findByPk(id);
        return data?.getUser();
    },
};

export default UserService;

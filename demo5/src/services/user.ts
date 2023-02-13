import { ILoginParams, IUser } from "../interfaces/user";
import { User } from "../models";
import TokenService from "./token";

const UserService = {
    login: async (loginParams: ILoginParams): Promise<string> => {
        const { userName, password } = loginParams;
        if (!userName || !password) {
            return "";
        }
        const data = await User.findOne({ where: { userName, password } });
        const token = TokenService.generateToken(data?.dataValues);
        return token;
    },
    getUserById: async (id: number): Promise<IUser> => {
        const data = await User.findByPk(id);
        return data?.dataValues;
    },
};

export default UserService;

import jwt from "jsonwebtoken";
import { IUser } from "../interfaces/user";

const secret = "jwt-token-study-secret";

const TokenService = {
    generateToken: (user?: IUser): string => {
        if (!user) {
            return "";
        }
        const { id, userName } = user;
        return jwt.sign({ id, userName }, secret, {
            expiresIn: 60 * 60 * 2, //Token validity time, unit: s
        });
    },
    validateToken: (token: string): { validity: boolean; jwtPayload: any } => {
        try {
            const jwtPayload = jwt.verify(token, secret);
            console.log("jwtPayload: ", jwtPayload);
            return {
                validity: true,
                jwtPayload,
            };
        } catch (e: any) {
            console.error("token validate fail.");
            return {
                validity: false,
                jwtPayload: null,
            };
        }
    },
};

export default TokenService;

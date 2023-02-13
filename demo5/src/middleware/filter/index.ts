import { NextFunction, Request, Response } from "express";
import config from "../../config";
import TokenService from "../../services/token";

const Filter = (request: Request, response: Response, next: NextFunction) => {
    const ignore = config.ignoreFilters.some((item) => {
        if (request.method === item.method) {
            const rule = `^${item.rule}$`;
            const regex = new RegExp(rule);
            return regex.test(request.url.substring(config.baseUrl.length));
        }
        return false;
    });
    if (ignore) {
        next();
    } else {
        const token = request.headers.authorization;
        if (!token) {
            response.json({
                code: 500,
                message: "unauthorized access",
            });
        } else {
            const result = TokenService.validateToken(token);
            if (result.validity) {
                next();
            } else {
                response.json({
                    code: 500,
                    message: "unauthorized access",
                });
            }
        }
    }
};

export default Filter;

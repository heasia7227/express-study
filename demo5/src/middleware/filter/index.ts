import { NextFunction, Request, Response } from "express";
import config from "../../config";
import TokenService from "../../services/token";

const Filter = (request: Request, response: Response, next: NextFunction) => {
    const ignore = config.ignoreFilters.some((item) => request.url.endsWith(item));
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

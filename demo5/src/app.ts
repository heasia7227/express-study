import express, { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import config from "./config";
import controllers from "./controllers";
import swagger from "./middleware/swagger";
import filter from "./middleware/filter";

const app = express();

swagger(app);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(filter);
app.use(config.baseUrl, controllers);

// catch 404 and forward to error handler
app.use((request: Request, response: Response, next: NextFunction) => {
    next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    // res.render("error");
    res.json({
        code: 500,
        message: err.message,
    });
});

module.exports = app;

import generator from "express-swagger-generator";
import { Express } from "express-serve-static-core";

const expressSwagger = (app: Express) => {
    const options = {
        swaggerDefinition: {
            info: {
                description: "This is a sample server",
                title: "Swagger",
                version: "1.0.0",
            },
            host: "localhost:3000",
            basePath: "/v1/api",
            produces: ["application/json", "application/xml"],
            schemes: ["http", "https"],
            securityDefinitions: {
                JWT: {
                    type: "apiKey",
                    in: "header",
                    name: "Authorization",
                    description: "",
                },
            },
        },
        basedir: __dirname, //app absolute path
        files: ["../../controllers/**/*.ts", "../../interfaces/**/*.ts"], //Path to the API handle folder
    };

    const swagger = generator(app);
    return swagger(options);
};

export default expressSwagger;

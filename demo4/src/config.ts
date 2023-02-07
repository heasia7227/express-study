import sequelize from "sequelize";

const config = {
    mssqlConfig: {
        host: "127.0.0.1",
        port: 1433,
        username: "username",
        password: "1qaz@WSX",
        database: "mydb",
        dialect: "mssql",
        logging: false,
        timestamps: false,
        dialectOptions: {
            multipleStatements: true,
        },
        pool: {
            min: 0,
            max: 10,
            idleTimeoutMillis: 3000,
        },
    } as sequelize.Options,
};

export default config;

const config = {
    mssqlConfig: {
        user: "username",
        password: "1qaz@WSX",
        server: "127.0.0.1",
        database: "mydb",
        port: 1433,
        options: {
            encrypt: true, // Use this if you're on Windows Azure
            trustServerCertificate: true,
        },
        pool: {
            min: 0,
            max: 10,
            idleTimeoutMillis: 3000,
        },
    },
};

export default config;

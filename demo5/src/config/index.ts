const config = {
    baseUrl: "/v1/api",
    ignoreFilters: [
        {
            rule: "/users/login",
            method: "POST",
        },
        {
            rule: "/goods",
            method: "GET",
        },
        {
            rule: "/goods/\\d*",
            method: "GET",
        },
    ],
};

export default config;

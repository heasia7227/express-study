### use express

```
npm install express-generator -g
express demo4
```

### use typescript

```
npm install typescript --save-dev
npm install @types/node --save-dev
npm install @types/express --save-dev
npm install @types/http-errors --save-dev
npm install @types/cookie-parser --save-dev
npm install @types/morgan --save-dev
```

create tsconfig.json

```
npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
```

install nodemon

```
npm install nodemon ts-node --save-dev
```

create nodemon.json

```
{
    "watch": ["src"],
    "ext": ".ts,.js",
    "ignore": [],
    "exec": "ts-node ./bin/www"
}
```

### use sequelize orm

https://sequelize.org/

```
npm install sequelize --save
# npm install pg pg-hstore --save # Postgres
# npm install mysql2 --save
# npm install mariadb --save
# npm install sqlite3 --save
npm install tedious --save # Microsoft SQL Server
# npm install oracledb --save # Oracle Database
```

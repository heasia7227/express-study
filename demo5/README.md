Build a small e-commerce platform based on pseudo demand.<br />
Using Typescript<br />
Using sqlite database and sequelize ORM<br />

# List of requirements

| Requirement | Description                                                     |
| ----------- | --------------------------------------------------------------- |
| Users       | Implement user login, Users verify login when placing an order. |
| Goods       | Goods categories and Goods.                                     |
| Cart        | Goods that users choose to buy.                                 |
| Order       | The user's purchase list.                                       |

npm sqlite3 technology point
edit npm configuration file, location is C:\Users\SystemUser\.npmrc

```
disturl=https://npm.taobao.org/dist
strict-ssl=false #保证不做ssl验证
registry=https://registry.npm.taobao.org/
node_sqlite3_binary_host_mirror=https://npm.taobao.org/mirrors/
```

CMD

```
set NODE_TLS_REJECT_UNAUTHORIZED=0
npm install sqlite3@5.0.0 -g
```

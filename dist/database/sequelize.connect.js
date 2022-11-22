"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize("hito1cliente", //dbname,
"root", //username
"", //password
{
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql"
});
//# sourceMappingURL=sequelize.connect.js.map
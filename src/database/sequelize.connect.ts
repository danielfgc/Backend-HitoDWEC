import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "hito1cliente",//dbname,
    "root",//username
    "",//password
    {
        host:"127.0.0.1",
        port:3306,
        dialect:"mysql"
    }
    );
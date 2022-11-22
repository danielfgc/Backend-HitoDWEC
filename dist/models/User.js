"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const sequelize_connect_1 = require("../database/sequelize.connect");
const Formality_1 = require("./Formality");
exports.User = sequelize_connect_1.sequelize.define("user", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
exports.User.hasMany(Formality_1.Formality, {
    foreignKey: 'iduser',
    sourceKey: 'id'
});
Formality_1.Formality.belongsTo(exports.User, {
    foreignKey: 'iduser',
    targetKey: 'id'
});
//# sourceMappingURL=User.js.map
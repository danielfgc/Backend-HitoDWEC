"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formality = void 0;
const sequelize_1 = require("sequelize");
const sequelize_connect_1 = require("../database/sequelize.connect");
exports.Formality = sequelize_connect_1.sequelize.define("formality", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    iduser: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    formalitytype: {
        type: sequelize_1.DataTypes.STRING,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    formalitybody: {
        type: sequelize_1.DataTypes.TEXT
    }
}, {
    timestamps: false
});
//# sourceMappingURL=Formality.js.map
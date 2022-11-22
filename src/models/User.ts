import { DataTypes } from "sequelize";
import { sequelize } from "../database/sequelize.connect";
import { Formality } from "./Formality";

export const User = sequelize.define("user", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }
},{
    timestamps:false
});
User.hasMany(Formality,{
    foreignKey:'iduser',
    sourceKey:'id'
});
Formality.belongsTo(User,{
    foreignKey:'iduser',
    targetKey:'id'
});

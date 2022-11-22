import{DataTypes} from "sequelize";
import { sequelize } from "../database/sequelize.connect";

export const Formality = sequelize.define("formality",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    iduser:{
        type: DataTypes.INTEGER,
    },
    formalitytype:{
        type:DataTypes.STRING,
    },
    title:{
        type:DataTypes.STRING,
    },
    formalitybody:{
        type:DataTypes.TEXT
    }
},{
    timestamps:true
});

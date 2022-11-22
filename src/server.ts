import app from "./app";
import * as dotenv from "dotenv";
import { sequelize } from "./database/sequelize.connect";
import { Formality } from "./models/Formality";
import { User } from "./models/User";
dotenv.config();

async function main() {
    try{
        await sequelize.sync();
        Formality.sync({alter:true});
        User.sync({alter:true});
        app.listen(app.get("port"),()=>{
            console.log(
                "App running at http://localhost:%d",
                app.get("port"),
                app.get("env")
        
            );
            console.log("Press CTRL+C to stop\n");
        });
    }catch(error){
        console.error("Unable to connect: ", error);
    }
    
}
main();
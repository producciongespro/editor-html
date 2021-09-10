import mongoose from "mongoose";

export default async function conectionDB () {
    
    try {
        const DB = await mongoose.connect( process.env.DB_PATH, {useNewUrlParser: true, useUnifiedTopology: true} );
        console.log("conexión a BD satisfactoria", DB.connection.name);
    } catch (error) {
        console.log(error);
    }

}
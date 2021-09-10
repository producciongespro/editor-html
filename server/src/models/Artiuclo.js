import mongoose from "mongoose";

const articulosSchema = new mongoose.Schema({
  titulo: String,
  volumen: String, 
  anno: String,
  autor: String,
  cuerpo: String

});


const Articulo = mongoose.model("Articulo", articulosSchema );

export default Articulo;
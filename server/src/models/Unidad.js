import mongoose from "mongoose";

const unidadesUsuarioSchema = new mongoose.Schema({
  idUsr: String,
  unidades: [
    {
      id: String,
      titulo: String,
      activo: Boolean
    }
  ]
});


const UnidadesUsuario = mongoose.model("UnidadesUsuario", unidadesUsuarioSchema, 'UnidadesUsuario' );

export default UnidadesUsuario;
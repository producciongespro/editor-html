import mongoose from "mongoose";

const objetoSchema = new mongoose.Schema ({
    idUsr: String,
    objetos: [
      {
        idObjeto: String,
        nombre: String,
        descripcion: String,
        activo : Boolean,
        visto : Boolean
      }
    ]
})


const ObjetosUsuario = mongoose.model(
    "ObjetosUsuario",
    objetoSchema,
    'ObjetosPorUsuario'
  );

  export default ObjetosUsuario;
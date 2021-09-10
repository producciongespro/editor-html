import mongoose from "mongoose";

const juegosUsuarioSchema = new mongoose.Schema({
  idUsr: {
    type: String
  },
  juegos: [
    {
      idJuego: {
        type: String,        
        trim: true,
      },
      nombre: {
        type: String,        
        trim: true,
      },
      tipo: {
        type: String        
      },
      unidad: {
        type: String,
        
      },
      tema: {
        type: String
        
      },
      activo: {
        type: Boolean,
        default: false,
      },
      avance: {
        type: Number,
        default: 0
      },
      terminado: {
        type: Boolean,
      },

      ultimoAcceso: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const JuegosUsuario = new mongoose.model(
  "JuegosUsuario",
  juegosUsuarioSchema,
  'juegosUsuario'
);

export default JuegosUsuario;

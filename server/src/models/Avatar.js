import mongoose from "mongoose";

const avatarUsuarioSchema = new mongoose.Schema ({
    idUsr: {
        type: String
    },
    tipo: {
        type: String
    },
    traje: {
       type: String 
    },
    sexo: {
        type: String
    },
    fase: {
        type: Number,
        default: 0
    }

});

const AvatarUsuario = mongoose.model(
    "AvatarUsuario",
    avatarUsuarioSchema,
    'AvatarPorUsuario'
  );

export default AvatarUsuario;

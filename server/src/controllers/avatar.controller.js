import AvatarUsuario from "../models/Avatar.js";

export async function getAvatarUsuario(req, res) {
  try {
    const { idUsr } = req.query;
    //console.log("idUsr en getAvatarUsuario", idUsr);
    const avatarUsuario = await AvatarUsuario.findOne({ idUsr });
    res.json(avatarUsuario);
  } catch (error) {
    res.json({ error });
  }
}

export async function updateAvatar(req, res) {
  //try {
    const { idUsr } = req.query;
    const { tipo, traje, fase } = req.body;
    await sleep (2000);
    const tmp = await AvatarUsuario.findOne({idUsr});
            
    const avatarUsuario = await AvatarUsuario.findById(tmp._id );
    //console.log(avatarUsuario);

    //Asignación de datos al modelo:
    //Se validan si la request envia tipo y/o traje 
    
    tipo ? avatarUsuario.tipo = tipo : avatarUsuario.tipo;  
    traje ? avatarUsuario.traje = traje : avatarUsuario.traje;
    avatarUsuario.fase = fase;

    avatarUsuario.save( error => {
       !error ? res.json({ isOk: true, msj: "Avatar actualizado de forma correcta" })
       : res.json({ isOk: false, error: "error" });
    } );
    

 // } catch (error) {
    //res.json({ isOk: false, error });
  //}
}


function sleep (ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

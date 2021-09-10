import ObjetosUsuario from "../models/Objeto.js";


export async function getObjetosUsuario(req, res) {
  try {
    const { idUsr } = await req.query;
    const objetosUsuario = await ObjetosUsuario.find({ idUsr });
    res.json(objetosUsuario);
  } catch (error) {
    res.json(error);
  }
}


export async function updateObjetoUsuario(req, res) {
  const { idUsr } = await req.query;
  const {idObjeto, activo, visto } = req.body;
  //TODO validación de datos
  const data = {activo, visto};
  const tmp = await ObjetosUsuario.findOne({idUsr});
  const objetosUsuario = await ObjetosUsuario.findById (tmp._id);
  //console.log(objetosUsuario.objetos );
  objetosUsuario.objetos.forEach(item => {
    if (item.idObjeto == idObjeto) {
        Object.assign(item, data);    
    }    
  });
  
  await objetosUsuario.save( error => {
    if (error) {      
      res.json({isOk: false, error })
    } else {     
      res.json({isOk: true, msj: "Objeto actualizado de forma satrisfactoria" })
    }
      
  } );
  
  


}

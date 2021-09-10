import UnidadesUsuario from "../models/Unidad.js";

export async function getUnidadesUsuario(req, res) {
  try {
    const { idUsr } = req.query;
    const unidadesUsuario = await UnidadesUsuario.find({ idUsr });
    res.json(unidadesUsuario);
  } catch (error) {
    res.json({ error });
  }
}

export async function updateUnidades(req, res) {
  const { _id } = req.query;
  const { id, activo } = req.body;
  const data = { activo };
  const unidadesUsuario = await UnidadesUsuario.findById(_id);

  //console.log(unidadesUsuario);
  //console.log("id--->", id);

  unidadesUsuario.unidades.forEach((item) => {
    //console.log(item);

    if (item.id == id) {
      //console.log(item);
      Object.assign(item, data);
    }
  });

  await unidadesUsuario.save((error) => {
    error
      ? res.json({ isOk: false, error })
      : res.json({ isOk: true, msj: "Unidad actualizada." });
  });
}

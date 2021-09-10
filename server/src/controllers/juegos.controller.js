import JuegosUsuario from "../models/Juego.js";

export async function getJuegosUsuario(req, res) {
  try {
    const { idUsr } = req.query;
    console.log(idUsr);
    const juegosUsuario = await JuegosUsuario.find({ idUsr });

    res.json(juegosUsuario);
  } catch (error) {
    res.json({ error });
  }
}

export async function getJuego(req, res) {
  console.log("req.query", req.query);
  const { idUsr, idJuego } = req.query;
  //console.log("idUsr, idJuego-->", idUsr, idJuego);

  const juegosUsuario = await JuegosUsuario.findOne({ idUsr });

  console.log(juegosUsuario._id);

  let juego = null;
  juegosUsuario.juegos.forEach((item) => {
    if (item.idJuego == idJuego) {
      juego = item;
    }
  });
  juego._id = juegosUsuario._id;
  res.json(juego);
}

export async function updateAvanceJuego(req, res) {
  //try {
  const { idUsr, idJuego } = req.query;
  const { avance, terminado } = req.body;
  const data = { avance, terminado };
  //console.log(_id);
  const tmp = await JuegosUsuario.findOne({idUsr});
  const juegosUsuario = await JuegosUsuario.findById(tmp._id);

  //console.log("juegosUsuario--->", juegosUsuario);

  juegosUsuario.juegos.forEach((item) => {
    if (item.idJuego == idJuego) {
      Object.assign(item, data);
    }
  });

  await juegosUsuario.save((error) => {
    if (error) {
      res.json({ isOk: false, error });
    } else {
      res.json({
        isOk: true,
        msj: "Juego actualizado de forma satisfactoria",
      });
    }
  });

  //  } catch (error) {
  // res.json({ isOk: false, error });
  //  }
}

export async function toogleJuego(req, res) {
  //console.log("req.query", req.query);

  try {
    const { idUsr, idJuego } = req.query;
    const { activo } = req.body;
    const tmp = await JuegosUsuario.findOne({idUsr});
    const juegosUsuario = await JuegosUsuario.findById(tmp._id);

    juegosUsuario.juegos.forEach((item) => {
      if (item.idJuego == idJuego) {
        item.activo = activo;
      }
    });
    juegosUsuario.save();

    res.json({ isOk: true, msj: "Valor de activo en juego--> " + activo });
  } catch (error) {
    res.json({isOk:false, error})
  }
}

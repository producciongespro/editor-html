import Articulo from "../models/Artiuclo.js";


export async function getArticulos(req, res) {      
    const articulos = await Articulo.find();
    res.json(articulos);  
}


export async function setArticulos(req, res) {      
    const {titulo, volumen, anno, autor, cuerpo} = req.body;
    const nuevoArticulo = new Articulo({titulo, volumen, anno, autor, cuerpo});
    await nuevoArticulo.save();
    

    res.json({isOk:true});
}
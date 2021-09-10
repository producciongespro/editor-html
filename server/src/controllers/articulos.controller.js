import Articulo from "../models/Artiuclo";

export async function getArticulos(req, res) {      
    const articulos = await Articulo.find();
    res.json(articulos);  
}


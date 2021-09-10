import Articulo from "../models/Artiuclo.js";


export async function getArticulos(req, res) {      
    const articulos = await Articulo.find();
    res.json(articulos);  
}
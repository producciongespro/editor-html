import Articulo from "../models/Artiuclo.js";


export async function getArticulos(req, res) {      
    const articulos = await Articulo.find();
    res.json(articulos);  
}


export async function setArticulo(req, res) {      
    const {titulo, volumen, anno, autor, cuerpo} = req.body;
    const nuevoArticulo = new Articulo({titulo, volumen, anno, autor, cuerpo});
    await nuevoArticulo.save();
    

    res.json({isOk:true, item: nuevoArticulo});
}


export async function updateArticulo (req, res) {
    const { _id } = req.query;
    const {titulo, volumen, anno, autor, cuerpo} = req.body;
    //console.log( _id);
    //console.log(titulo, volumen, anno, autor, cuerpo);
    const item = await Articulo.findByIdAndUpdate( _id, { titulo, volumen, anno, autor, cuerpo } );
    
    res.json({isOk: true, item });

}


export async function deleteArticulo (req, res) {
    const { _id } = req.query;
    const item = await Articulo.findByIdAndDelete(_id);
    res.json({isOk: true, item });

    
}
import { Router } from "express";
import * as ctrObjetos from "../controllers/objetos.controller.js";


const routerObjetos = Router ();

routerObjetos.get("/objetos-usuario", ctrObjetos.getObjetosUsuario);

routerObjetos.put("/objetos-usuario", ctrObjetos.updateObjetoUsuario );

export default routerObjetos;
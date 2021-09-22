import { Router } from "express";
import * as ctrArticulos from "../controllers/articulos.controller.js";
const routerArticulos = Router();

routerArticulos.get("/articulos", ctrArticulos.getArticulos);
routerArticulos.post ("/articulos", ctrArticulos.setArticulo);
routerArticulos.put ("/articulos", ctrArticulos.updateArticulo);
routerArticulos.delete("/articulos", ctrArticulos.deleteArticulo);


export default routerArticulos;
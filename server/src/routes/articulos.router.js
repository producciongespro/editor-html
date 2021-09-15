import { Router } from "express";
import * as ctrArticulos from "../controllers/articulos.controller.js";
const routerArticulos = Router();

routerArticulos.get("/articulos", ctrArticulos.getArticulos);
routerArticulos.post ("/articulos", ctrArticulos.setArticulos);


export default routerArticulos;
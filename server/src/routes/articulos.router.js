import { Router } from "express";
import * as ctrArticulos from "../controllers/articulos.controller.js";
const routerArticulos = Router();

routerArticulos.get("/articulos", ctrArticulos.getArticulos);



export default routerArticulos;
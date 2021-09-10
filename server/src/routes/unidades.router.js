import { Router } from "express";
import * as ctrUnidades from "../controllers/unidades.controller.js";
const routerUnidades = Router();

routerUnidades.get("/unidades-usuario", ctrUnidades.getUnidadesUsuario );

routerUnidades.put("/unidades-usuario", ctrUnidades.updateUnidades );

export default routerUnidades;
import { Router } from "express";
import * as ctrJuegos from "../controllers/juegos.controller.js";
const routerJuegos = Router();

routerJuegos.get("/juegos-usuario", ctrJuegos.getJuegosUsuario);

routerJuegos.get("/juego", ctrJuegos.getJuego);

routerJuegos.put("/juego", ctrJuegos.updateAvanceJuego );

routerJuegos.put("/toggle-juego", ctrJuegos.toogleJuego );


export default routerJuegos;
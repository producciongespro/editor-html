import { Router } from "express";
import * as ctrAvatar from "../controllers/avatar.controller.js";
const routerAvatar = Router();

routerAvatar.get("/avatar-usuario", ctrAvatar.getAvatarUsuario);

routerAvatar.put("/avatar-usuario", ctrAvatar.updateAvatar);



export default routerAvatar;
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectionDB from "./conection.db.js";
import routerAvatar from "./routes/avatar.router.js";
import routerJuegos from "./routes/juegos.router.js";
import routerUnidades from "./routes/unidades.router.js";
import routerObjetos from "./routes/objetos.router.js";


const app = express();

dotenv.config();
conectionDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>API CONFE JUEGOS</h1>");
});

app.use("/api", routerAvatar);
app.use("/api", routerJuegos);
app.use("/api", routerUnidades);
app.use("/api", routerObjetos );

app.listen(process.env.port, () => {
  console.log(`Example app listening at http://localhost:${process.env.port}`);
});

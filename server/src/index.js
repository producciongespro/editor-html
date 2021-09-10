import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectionDB from "./conection.db.js";
import routerArticulos from "./routes/articulos.router.js";


const app = express();

dotenv.config();
conectionDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>API CONFE JUEGOS</h1>");
});

app.use("/api", routerArticulos);

app.listen(process.env.port, () => {
  console.log(`App listening at http://localhost:${process.env.port}`);
});

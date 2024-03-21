import { Router } from "express";
import {
  listarRecetas,
  crearRecetas,
  borrarRecetas,
  editarRecetas,
  obtenerReceta
} from "../controller/recetas.controller.js";

const Recetasrouter = Router();

Recetasrouter.route("/recetas").get(listarRecetas).post(crearRecetas);
Recetasrouter.route("/receta/:id")
  .delete(borrarRecetas)
  .put(editarRecetas)
  .get(obtenerReceta);
export default Recetasrouter;

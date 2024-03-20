import { Router } from "express";
import { listarRecetas, crearRecetas, borrarRecetas, editarRecetas, crearUsuarios, obtenerReceta } from "../controller/recetas.controller.js";

const Recetasrouter = Router();

Recetasrouter.route('/recetas').get(listarRecetas).post(crearRecetas);
Recetasrouter.route('/receta/:id').delete(borrarRecetas).put(editarRecetas).get(obtenerReceta);
Recetasrouter.route('/usuario').post(crearUsuarios)

export default Recetasrouter
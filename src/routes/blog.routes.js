import { Router } from "express";

const Recetasrouter = Router();

Recetasrouter.route('/recetas').get(listarRecetas).post(crearRecetas);
Recetasrouter.route('/receta/:id').delete(borrarRecetas).put(editarRecetas);
Recetasrouter.route('/usuario').post(agregarUsuario)

export default Recetasrouter
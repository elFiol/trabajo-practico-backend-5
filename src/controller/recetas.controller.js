import Recetas from "../database/model/recetas.js"
import Usuario from "../database/model/usuarios.js"

export const editarRecetas = async(req, res) => {
    try{
        const buscarRecetas = await Recetas.findById(req.params.id)
        if(!buscarRecetas){
            return res.status(404).json({mensaje: "no se pudo editar la receta, el id es incorrecto"})
        }
        await Recetas.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensage: "la receta fue modificado exitosamente"})
    }catch(error){
        console.log(error)
        res.status(500).json({
            mensaje: "ocurrio un error al querer intentar editar la recetas"
        })
    }
}

export const crearRecetas = async (req, res) => {
    try {
      const recetaNueva = new Recetas(req.body);
      await recetaNueva.save();
      res.status(201).json({
        mensaje: "la receta fue creada correctamente",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        mensaje: "No se pudo procesar la solicitud de crear la receta",
      });
    }
}; 


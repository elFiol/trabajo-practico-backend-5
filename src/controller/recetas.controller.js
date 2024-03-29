import Recetas from "../database/model/recetas.js"

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

export const obtenerReceta = async(req,res) => {
    try{
        console.log(req.params.id)
        const receta = await Recetas.findById(req.params.id)
        res.status(200).json(receta)
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "no se pudo encontrar la receta"
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

export const borrarRecetas = async (req, res) => {
    try {
      const buscarRecetas = await Recetas.findById(req.params.id);
      if (!buscarRecetas) {
        return res
          .status(404)
          .json({ mensaje: "no se pudo borrar la receta, el id es incorrecto" });
      }
      await Recetas.findByIdAndDelete(req.params.id);
      res.status(200).json({ mensage: "la receta fue borrada exitosamente" });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        mensaje: "ocurrio un error al querer intentar borrar la receta",
      });
    }
};

export const listarRecetas = async (req, res) => {
    try {
      const recetas = await Recetas.find();
      res.status(200).json(recetas);
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "no se pudo encontrar la lista de Recetas",
      });
    }
};
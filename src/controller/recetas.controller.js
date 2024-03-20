

export const editarColor = async(req, res) => {
    try{
        const buscarColor = await Color.findById(req.params.id)
        if(!buscarColor){
            return res.status(404).json({mensaje: "no se pudo editar el color, el id es incorrecto"})
        }
        await Color.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensage: "el color fue modificado exitosamente"})
    }catch(error){
        console.log(error)
        res.status(500).json({
            mensaje: "ocurrio un error al querer intentar editar el color"
        })
    }
}
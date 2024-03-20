import mongoose from "mongoose";

const recetasSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(value);
      },
      message: (props) => `${props.value} no es una URL de imagen válida`,
    },
  },
  categoria: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  ingredientes: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 80,
  },
  instrucciones: {
    type: String,
    required: true,
    minlength: 30,
    maxlength: 100,
  },
  descripcionBreve: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 60,
  },
});

const Color = mongoose.model("Color", recetasSchema);

export default Color;

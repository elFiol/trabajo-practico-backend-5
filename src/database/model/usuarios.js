import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    minlength: 6,
    maxlength: 35,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value);
      },
      message: (props) =>
        `${props.value} no es una dirección de correo electrónico de Gmail válida`,
    },
  },
  contraseña: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 45,
  }
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;

import * as yup from "yup";

const regexOnlyLetters = "[a-zA-Z ]"

export const schemaLogin = yup.object({
  email: yup.string().email("Porfavor ingrese un correo").required("Porfavor ingrese su correo"),
  password: yup.string().required("Porfavor ingrese su contraseña")
}).required();     
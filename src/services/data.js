import * as yup from "yup";

const regexOnlyLetters = "[a-zA-Z ]"
const passwordRegex =
  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

export const schemaLogin = yup.object({
  email: yup
    .string()
    .email("Porfavor ingrese un correo")
    .required("Porfavor ingrese su correo"),
  password: yup
    .string()
    .required("Porfavor ingrese su contraseña")
});

export const schemaRegister = yup.object({
  email: yup
    .string()
    .email("Porfavor ingrese un correo")
    .required("Porfavor ingrese un correo electronico"),
  password: yup
    .string()
    .required("Porvafor ingrese una contraseña")
    .min(8, "La contraseña debe contemer al menos 8 caracteres")
    .max(16, "La contraseña debe contener máximo 16 caracteres")
    .matches(passwordRegex, {
      message: "La contraseña debe contener al menos un número, una minúscula, una mayúscula y al menos un caracter no alfanumérico"
    }),
  name: yup
    .string()
    .required("Porfavor ingrese su nombre")
    .matches(regexOnlyLetters, {
      message: "El nombre solo puede contener letras"
    }),
})
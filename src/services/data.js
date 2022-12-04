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
export const schemaAddProduct = yup.object({
  name: yup
    .string()
    .required("Porfavor ingrese el nombre del producto")
    .matches(regexOnlyLetters, {
      message: 'El nombre del producto no es válido',
    }),
  type: yup
    .string()
    .required('Porfavor ingrese el tipo de producto')
    .matches(regexOnlyLetters, {
      message: 'El tipo de producto no es válido',
    }),
  quantity: yup
    .string()
    .required('Porfavor ingrese la cantidad')
    .min(1, "Debe de haber al menos un producto"),
  region: yup
    .string()
    .required('La region donde se produjo el producto es obligatoria')
    .matches(regexOnlyLetters, {
      message: 'La region solo puede contener letras'
    }),
  price: yup
    .string()
    .required('El precio del producto es obligatorio')
})

export const schemaRegister = yup.object({
  email: yup
    .string()
    .email("Porfavor ingrese un correo")
    .required("Porfavor ingrese un correo electronico"),
  password: yup
    .string()
    .required("Porvafor ingrese una contraseña")
    .min(8, "La contraseña debe contener al menos 8 caracteres")
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
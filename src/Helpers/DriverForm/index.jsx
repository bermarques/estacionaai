import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(4, "Mínimo de 4 caracteres.")
    .matches(
      /^[a-z ,.'-]+$/i,
      "Caracteres especiais e números não são permitidos."
    )
    .required("Esse campo é obrigatório!"),
  email: yup
    .string()
    .email("Deve ser um e-mail válido!")
    .required("Esse campo é obrigatório!"),

  password: yup
    .string()
    .min(8, "Deve conter no mínimo 8 caracteres!")
    .matches(
      /^(?=.*?[a-z])(?=.*?[#?!@$ %^&*-]).{1,}$/,
      "Pelo menos um caractere especial!"
    )
    .required("Esse campo é obrigatório!"),

  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "A senha deve ser igual!"),
});

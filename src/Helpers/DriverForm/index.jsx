import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(4, "Mínimo de 4 caracteres para o Nome.")
    .matches(
      /^[a-z ,.'-]+$/i,
      "Caracteres especiais e números não são permitidos."
    )
    .required("O campo Nome é obrigatório!"),
  email: yup
    .string()
    .email("Deve ser um e-mail válido!")
    .required("O campo E-mail é obrigatório!"),

  password: yup
    .string()
    .min(8, "A senha deve conter no mínimo 8 caracteres!")
    .matches(/^(?=.*?[#?!@$ %^&*-]).{1,}$/, "Pelo menos um caractere especial!")
    .required("O campo Senha é obrigatório!"),

  password_confirmation: yup
    .string()
    .required("O campo Confirmação de senha é obrigatório!")
    .oneOf([yup.ref("password")], "A senha deve ser igual!"),
  car: yup.string().required("Esse campo é obrigatório!"),
  plate: yup
    .string()
    .required("Esse ccampo é obrigatório!")
    .matches(
      /^([A-Z]{3}[0-9][0-9A-Z][0-9]{2})$/,
      "Placa inválida!, deve ser no padrão mercosul AAA0A00"
    ),
});

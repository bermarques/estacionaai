import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(4, "Mínimo de 4 caracteres para o Nome.")
    .matches(
      /^[A-Z][a-z]* [A-Z][a-z]*$/i,
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
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      "Pelo menos uma letra maíuscula e um número!"
    )
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
      /^([A-Z]{3}[0-9][0-9A-Z][0-9]{2})$/ || /^[a-zA-Z]{3}[0-9]{4}$/,
      "Placa inválida!, deve ser no padrão mercosul AAA0A00"
    ),
});

export const driverFormData = [
  {
    placeholder: "Nome",
    name: "name",
    type: "text",
  },

  {
    placeholder: "E-mail",
    name: "email",
    type: "email",
  },
  /*{
    placeholder: "Senha",
    name: "password",
    type: "password",
  },
    {
    placeholder: "Repetir senha",
    name: "password_confirmation",
    type: "password",
  },*/
  {
    placeholder: "Veículo",
    name: "car",
    type: "text",
  },
  {
    placeholder: "Placa",
    name: "plate",
    type: "text",
  },
];

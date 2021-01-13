import * as yup from "yup";

export const schema = yup.object().shape({
  image: yup.string().required("O campo de imagem é obrigatório"),
  street: yup.string().required("O campo rua é obrigatório"),
  number: yup
    .number("Somente números.")
    .positive("Somente números positivos!")
    .integer("Somente números inteiros")
    .required("O campo de número é obrigatório!"),
  neighborhood: yup.string().required("O campo bairro é obrigatório!"),
  city: yup.string().required("O campo cidade é obrigatório!"),
  cep: yup
    .number("Somente números.")
    .positive("Somente números positivos!")
    .integer("Somente números inteiros")
    //.matches(/^[0-9]{2}-[0-9]{4}-[0-9]{4}$/, "Precisa ser um cep válido!")
    .required("O campo de cep é obrigatório!"),
  price: yup
    .number("Somente números.")
    .positive("Somente números positivos!")
    .integer("Somente números inteiros")
    .required("O campo de preço é obrigatório!"),
  days: yup
    .number("Somente números.")
    .positive("Somente números positivos!")
    .integer("Somente números inteiros")
    .min(1, "Mínimo de 1 diária!")
    .required("O campo de diária é obrigatório!"),
});

export const parkingFormdata = [
  {
    placeholder: "Url imagem",
    name: "image",
    type: "file",
  },

  {
    placeholder: "Rua",
    name: "street",
    type: "text",
  },
  {
    placeholder: "Número",
    name: "number",
    type: "number",
  },
  {
    placeholder: "Bairro",
    name: "neighborhood",
    type: "text",
  },
  {
    placeholder: "Cidade",
    name: "city",
    type: "text",
  },
  {
    placeholder: "CEP",
    name: "cep",
    type: "number",
  },
  {
    placeholder: "Preço",
    name: "price",
    type: "number",
  },
  {
    placeholder: "Diárias",
    name: "days",
    type: "number",
  },
];

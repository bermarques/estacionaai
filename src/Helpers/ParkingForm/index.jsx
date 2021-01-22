import * as yup from "yup";

export const schema = yup.object().shape({
  number: yup
    .number("Somente números.")
    .positive("Somente números positivos!")
    .integer("Somente números inteiros")
    .required("O campo de número é obrigatório!"),

  cep: yup
    .number()
    .min(8, "O cep contém 8 digitos.")
    .positive("Somente números positivos!")
    .integer("Somente números inteiros")
    //.matches(/^[0-9]{2}-[0-9]{4}-[0-9]{4}$/, "Precisa ser um cep válido!")
    .required("O campo de cep é obrigatório!"),
  price: yup
    .number("Somente números.")
    .positive("Somente números positivos!")
    .integer("Somente números inteiros")
    .required("O campo de preço é obrigatório!"),
  phone: yup
    .number("Somente números.")
    .min(12, "Telefone deve conter 12 digitos!")
    .positive("Somente números positivos!")
    .integer("Somente números inteiros")
    //.matches(/^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/,"Telefone inválido")
    .required("O campo de telefone é obrigatório!"),
});

export const parkingFormdata = [
  {
    placeholder: "Preço",
    name: "price",
    type: "number",
  },
  {
    placeholder: "Data entrada",
    name: "dataEntrada",
    type: "date",
  },
  {
    placeholder: "Data Saída",
    name: "dataSaída",
    type: "date",
  },
];

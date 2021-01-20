import * as yup from "yup";

export const schema = yup.object().shape({
  number: yup
    .number("Somente números.")
    .positive("Somente números positivos!")
    .integer("Somente números inteiros")
    .required("O campo de número é obrigatório!"),

  // cep: yup
  //   .number("Somente números.")
  //   .positive("Somente números positivos!")
  //   .integer("Somente números inteiros")
  //   //.matches(/^[0-9]{2}-[0-9]{4}-[0-9]{4}$/, "Precisa ser um cep válido!")
  //   .required("O campo de cep é obrigatório!"),
  price: yup
    .number("Somente números.")
    .positive("Somente números positivos!")
    .integer("Somente números inteiros")
    .required("O campo de preço é obrigatório!"),
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

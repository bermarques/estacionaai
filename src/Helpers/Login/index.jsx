import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Deve ser um e-mail válido!")
    .required("O campo E-mail é obrigatório!"),

  password: yup
    .string()
    .min(8, "A senha deve conter no mínimo 8 caracteres!")
    .matches(/^(?=.*?[#?!@$ %^&*-]).{1,}$/, "Pelo menos um caractere especial!")
    .required("O campo Senha é obrigatório!"),
});

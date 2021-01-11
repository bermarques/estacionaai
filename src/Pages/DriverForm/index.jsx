import "../../Style/DriverForm/style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../Helpers/DriverForm/index";
import { formButton } from "../../Style/DriverForm/style.js";

const DriverForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const sendForm = (event) => {
    delete event.password_confirmation;
    console.log(event);
  };
  return (
    <div className="master">
      <form className="master-form" onSubmit={handleSubmit(sendForm)}>
        Nome
        <input
          className="input-form"
          type="text"
          placeholder="Nome"
          name="name"
          ref={register}
        />
        E-mail
        <input
          className="input-form"
          type="email"
          placeholder="E-mail"
          name="email"
          ref={register}
        />
        Senha
        <input
          className="input-form"
          type="password"
          placeholder="Senha"
          name="password"
          ref={register}
        />
        Confirmar Senha
        <input
          className="input-form"
          placeholder="Confirmação Senha"
          type="password"
          name="password_confirmation"
          ref={register}
        />
        <div>
          {errors.name?.message ||
            errors.email?.message ||
            errors.password?.message ||
            errors.password_confirmation?.message}
        </div>
        <button className="button-send" type="submit">
          CADASTRAR
        </button>
      </form>
    </div>
  );
};

export default DriverForm;

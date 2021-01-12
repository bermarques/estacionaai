import "../../../Style/ParkingForm/style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../Helpers/ParkingForm/index";

const ParkingLocation = ({}) => {
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
        Foto vaga
        <input
          className="input-form"
          type="url"
          placeholder="Url imagem"
          name="image"
          ref={register}
        />
        Rua
        <input
          className="input-form"
          type="text"
          placeholder="Rua"
          name="street"
          ref={register}
        />
        Número
        <input
          className="input-form"
          type="number"
          placeholder="Número"
          name="number"
          ref={register}
        />
        Bairro
        <input
          className="input-form"
          type="text"
          placeholder="Bairro"
          name="neighborhood"
          ref={register}
        />
        Cidade
        <input
          className="input-form"
          type="text"
          placeholder="Cidade"
          name="city"
          ref={register}
        />
        CEP
        <input
          className="input-form"
          type="number"
          placeholder="Número"
          name="cep"
          ref={register}
        />
        Estado
        <select className="input-form" name="state">
          <option ref={register} value="state">
            Selecione o Estado
          </option>
          <option ref={register} value="ac">
            Acre
          </option>
          <option ref={register} value="al">
            Alagoas
          </option>
          <option ref={register} value="am">
            Amazonas
          </option>
          <option ref={register} value="ap">
            Amapá
          </option>
          <option ref={register} value="ba">
            Bahia
          </option>
          <option ref={register} value="ce">
            Ceará
          </option>
          <option ref={register} value="df">
            Distrito Federal
          </option>
          <option ref={register} value="es">
            Espírito Santo
          </option>
          <option ref={register} value="go">
            Goiás
          </option>
          <option ref={register} value="ma">
            Maranhão
          </option>
          <option ref={register} value="mt">
            Mato Grosso
          </option>
          <option ref={register} value="ms">
            Mato Grosso do Sul
          </option>
          <option ref={register} value="mg">
            Minas Gerais
          </option>
          <option ref={register} value="pa">
            Pará
          </option>
          <option ref={register} value="pb">
            Paraíba
          </option>
          <option ref={register} value="pr">
            Paraná
          </option>
          <option ref={register} value="pe">
            Pernambuco
          </option>
          <option ref={register} value="pi">
            Piauí
          </option>
          <option ref={register} value="rj">
            Rio de Janeiro
          </option>
          <option ref={register} value="rn">
            Rio Grande do Norte
          </option>
          <option ref={register} value="ro">
            Rondônia
          </option>
          <option ref={register} value="rs">
            Rio Grande do Sul
          </option>
          <option ref={register} value="rr">
            Roraima
          </option>
          <option ref={register} value="sc">
            Santa Catarina
          </option>
          <option ref={register} value="se">
            Sergipe
          </option>
          <option ref={register} value="sp">
            São Paulo
          </option>
          <option ref={register} value="to">
            Tocantins
          </option>
        </select>
        Valor
        <input
          className="input-form"
          type="number"
          placeholder="Valor"
          name="price"
          ref={register}
        />
        Dias disponíveis
        <input
          className="input-form"
          type="number"
          placeholder="Dias disponíveis"
          min="1"
          name="days"
          ref={register}
        />
        Vaga
        <select className="input-form" name="park">
          <option ref={register} value="park">
            Selecione o tamanho da vaga.
          </option>
          <option ref={register} value="small">
            Pequeno porte.
          </option>
          <option ref={register} value="medium">
            Medio porte.
          </option>
          <option ref={register} value="big">
            Grande porte.
          </option>
        </select>
        Tipo de locação
        <select className="input-form" name="rent-type">
          <option ref={register} value="rent">
            Selecione o tipo de Locação
          </option>
          <option ref={register} value="daily">
            Diária
          </option>
          <option ref={register} value="weekly">
            Semanal
          </option>
          <option ref={register} value="monthly">
            Mensal
          </option>
        </select>
        <div>
          {errors.image?.message ||
            errors.street?.message ||
            errors.number?.message ||
            errors.neighborhood?.message ||
            errors.city?.message ||
            errors.cep?.message ||
            errors.price?.message ||
            errors.days?.message}
        </div>
        <button className="button-send" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ParkingLocation;

import "../../../Style/ParkingForm/style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, parkingFormdata } from "../../../Helpers/ParkingForm/index";
import uploadImage from "../../../requests/uploadImages";
import { useState } from "react";

const ParkingLocation = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const sendForm = (event) => {
    delete event.password_confirmation;
    console.log(event);
  };
  const [parkImage, setParkImage] = useState();
  const changeImage = async (e) => {
    setParkImage(await uploadImage(e));
  };
  return (
    <div className="master">
      <form className="master-form" onSubmit={handleSubmit(sendForm)}>
        {parkImage && <img src={`${parkImage}`} alt="imagem da vaga"></img>}
        {parkingFormdata.map((placeholder, name, type, index) => (
          <input
            key={index}
            name={name}
            placeholder={placeholder}
            type={type}
          />
        ))}
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

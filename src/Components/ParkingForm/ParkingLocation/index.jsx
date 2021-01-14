import "../../../Style/ParkingForm/style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  schema,
  parkingFormdata,
  States,
} from "../../../Helpers/ParkingForm/index";
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
        {parkingFormdata.map(({ placeholder, name, type }, index) => (
          <div>
            <div>{placeholder}</div>
            <input
              className="input-form"
              key={index}
              name={name}
              placeholder={placeholder}
              type={type}
              ref={register}
            />
          </div>
        ))}
        Estado
        <select className="input-form" name="state">
          {States.map(({ value, name }, index) => (
            <option key={index} ref={register} value={value}>
              {name}
            </option>
          ))}
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
        <div className="check-form">
          <input
            className="check-input"
            name="daily"
            type="checkbox"
            ref={register}
          />
          <label for="daily" value="daily">
            Diária
          </label>
        </div>
        <div className="check-form">
          <input
            className="check-input"
            name="weekly"
            type="checkbox"
            ref={register}
            value="weekly"
          />
          <label for="weekly" value="weekly">
            Semanal
          </label>
        </div>
        <div className="check-form">
          <input
            className="check-input"
            name="monthly"
            type="checkbox"
            ref={register}
            value="monthly"
          />
          <label for="monthly" value="monthly">
            Mensal
          </label>
        </div>
        <div className="errors">
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

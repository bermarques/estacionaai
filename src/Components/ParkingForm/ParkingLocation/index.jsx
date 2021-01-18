import "../../../Style/ParkingForm/style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, parkingFormdata } from "../../../Helpers/ParkingForm/index";
import uploadImage from "../../../requests/uploadImages";
import { useState } from "react";
import axios from "axios";

const ParkingLocation = () => {
  const [cepData, setCepData] = useState({
    logradouro: "",
    bairro: "",
    uf: "",
    cidade: "",
  });

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

  const onBlurCep = (event) => {
    const { value } = event.target;
    const cep = value?.replace(/[^0-9]/g, "");
    if (cep?.length !== 8) {
      return;
    }

    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((data) => {
      setCepData({
        logradouro: data.data.logradouro,
        bairro: data.data.bairro,
        uf: data.data.uf,
        cidade: data.data.localidade,
      });
      console.log(data);
    });
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
        <div>
          <div>CEP</div>
          <input className="input-form" onBlur={onBlurCep} />
        </div>
        Rua
        <input
          className="input-form"
          name="street"
          type="text"
          value={cepData.logradouro}
          disabled={!cepData.logradouro}
          ref={register}
        />
        Número
        <input
          className="input-form"
          name="number"
          type="text"
          disabled={!cepData.logradouro}
          ref={register}
        />
        Bairro
        <input
          className="input-form"
          name="neighborhood"
          type="text"
          value={cepData.bairro}
          disabled={!cepData.bairro}
          ref={register}
        />
        Cidade
        <input
          className="input-form"
          name="city"
          type="text"
          value={cepData.cidade}
          disabled={!cepData.cidade}
          ref={register}
        />
        Estado
        <select className="input-form" name="state" disabled={!cepData.uf}>
          <option ref={register} value={cepData.uf}>
            {cepData.uf}
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
        Veículos Aceitos
        <div className="check-form">
          <input
            className="check-input"
            name="car"
            type="checkbox"
            ref={register}
            value="monthly"
          />
          <label for="car" value="car">
            Carro
          </label>
        </div>
        <div className="check-form">
          <input
            className="check-input"
            name="motorcycle"
            type="checkbox"
            ref={register}
            value="motorcycle"
          />
          <label for="motorcycle" value="motorcycle">
            Moto
          </label>
        </div>
        <div className="check-form">
          <input
            className="check-input"
            name="truck"
            type="checkbox"
            ref={register}
            value="truck"
          />
          <label for="truck" value="truck">
            Caminhonete
          </label>
        </div>
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

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
import {
  StyledLabel,
  StyledInput,
  StyledForm,
  StyledButton,
} from "../../../Style/globalStyles";

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
    <div className="master-parking-form">
      <StyledForm onSubmit={handleSubmit(sendForm)}>
        {parkImage && <img src={`${parkImage}`} alt="imagem da vaga"></img>}
        {parkingFormdata.map(({ placeholder, name, type }, index) => (
          <div>
            <div>{placeholder}</div>
            <StyledInput
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
        <StyledInput
          className="input-form"
          type="number"
          placeholder="Valor"
          name="price"
          ref={register}
        />
        Veículos Aceitos
        <div className="check-form">
          <StyledInput
            className="check-input"
            name="car"
            type="checkbox"
            ref={register}
            value="monthly"
          />
          <StyledLabel for="car" value="car">
            Carro
          </StyledLabel>
        </div>
        <div className="check-form">
          <StyledInput
            className="check-input"
            name="motorcycle"
            type="checkbox"
            ref={register}
            value="motorcycle"
          />
          <StyledLabel for="motorcycle" value="motorcycle">
            Moto
          </StyledLabel>
        </div>
        <div className="check-form">
          <StyledInput
            className="check-input"
            name="truck"
            type="checkbox"
            ref={register}
            value="truck"
          />
          <StyledLabel for="truck" value="truck">
            Caminhonete
          </StyledLabel>
        </div>
        Tipo de locação
        <div className="check-form">
          <StyledInput
            className="check-input"
            name="daily"
            type="checkbox"
            ref={register}
          />
          <StyledLabel for="daily" value="daily">
            Diária
          </StyledLabel>
        </div>
        <div className="check-form">
          <StyledInput
            className="check-input"
            name="weekly"
            type="checkbox"
            ref={register}
            value="weekly"
          />
          <StyledLabel for="weekly" value="weekly">
            Semanal
          </StyledLabel>
        </div>
        <div className="check-form">
          <StyledInput
            className="check-input"
            name="monthly"
            type="checkbox"
            ref={register}
            value="monthly"
          />
          <StyledLabel for="monthly" value="monthly">
            Mensal
          </StyledLabel>
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
        <StyledButton className="button-send" type="submit">
          Enviar
        </StyledButton>
      </StyledForm>
    </div>
  );
};

export default ParkingLocation;

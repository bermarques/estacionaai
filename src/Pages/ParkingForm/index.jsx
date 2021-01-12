import "../../Style/ParkingForm/style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../Helpers/ParkingForm/index";
import ParkingLocation from "../../Components/ParkingForm/ParkingLocation/index";
import ParkingPrice from "../../Components/ParkingForm/ParkingPrice/index";
import { useState } from "react";

const ParkingForm = () => {
  const [firstStep, setFirstStep] = useState(true);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const sendForm = (event) => {
    delete event.password_confirmation;
    console.log(event);
  };

  return (
    <div className="render">
      <div className="master">
        {firstStep ? (
          <ParkingLocation
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            sendForm={sendForm}
            setFirstStep={setFirstStep}
          />
        ) : (
          <ParkingPrice
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            sendForm={sendForm}
          />
        )}
      </div>
    </div>
  );
};

export default ParkingForm;

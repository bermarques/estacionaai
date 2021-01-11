import "../../../Style/ParkingForm/style.css";

const ParkingPrice = ({ handleSubmit, sendForm, register, errors }) => {
  return (
    <div className="master">
      <form className="master-form" onSubmit={handleSubmit(sendForm)}>
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
        <div>{errors.price?.message || errors.days?.message}</div>
        <button className="button-send" type="submit">
          CADASTRAR
        </button>
      </form>
    </div>
  );
};

export default ParkingPrice;

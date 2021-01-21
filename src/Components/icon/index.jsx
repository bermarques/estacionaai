import { Container, Icon } from "./style";

export const CarIcon = () => {
  return (
    <Container>
      <div className="text-center">
        <img src="/assets/logo.png" alt="logo" />
      </div>
    </Container>
  );
};

export const BackIcon = ({ size, className }) => {
  return (
    <Icon
      className={className}
      src="/assets/back.svg"
      size={size}
      alt="voltar"
    />
  );
};

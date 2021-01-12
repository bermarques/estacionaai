import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { ButtonStyling } from "./style";

const LoginTabs = () => {
  return (
    <ButtonStyling>
      <Nav variant="tabs">
        <LinkContainer to="/login">
          <Nav.Link>Entre</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/register">
          <Nav.Link>Registre-se</Nav.Link>
        </LinkContainer>
      </Nav>
    </ButtonStyling>
  );
};

export default LoginTabs;

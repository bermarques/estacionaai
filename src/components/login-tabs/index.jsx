import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { useState } from "react";

const LoginTabs = () => {
  return (
    <Nav variant="tabs">
      <LinkContainer to="/login">
        <Nav.Link>Entre</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/register">
        <Nav.Link>Registre-se</Nav.Link>
      </LinkContainer>
    </Nav>
  );
};

export default LoginTabs;

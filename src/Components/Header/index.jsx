import { StyledNav, StyledText } from "./style";
import { Nav, NavItem, Image, NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackIcon } from "../icon/index";

const Header = () => {
  const [title, setTitle] = useState("");

  const { pathname } = useLocation();

  useEffect(() => {
    pathname === "/vagas" && setTitle("Vagas");
    pathname === "/cadastroDeVagas" && setTitle("Cadastro de Vagas");
  }, []);

  return (
    <StyledNav>
      <NavItem>
        <Nav.Link>
          <BackIcon size="30px" />
        </Nav.Link>
      </NavItem>
      <NavItem>
        <StyledText>{title}</StyledText>
      </NavItem>
      <NavItem>
        <Image
          className="avatar"
          src="https://pbs.twimg.com/profile_images/1042181136720453632/yzc4rno0_400x400.jpg"
          roundedCircle
        />
        <BackIcon className="menuitem" size="10px" />
        <NavDropdown align="right">
          <NavDropdown.Item>Adicionar Vaga</NavDropdown.Item>
          <NavDropdown.Item>Minhas Vagas</NavDropdown.Item>
          <NavDropdown.Item>Vagas disponiveis</NavDropdown.Item>
          <NavDropdown.Item className="logOut">Sair</NavDropdown.Item>
        </NavDropdown>
      </NavItem>
    </StyledNav>
  );
};

export default Header;

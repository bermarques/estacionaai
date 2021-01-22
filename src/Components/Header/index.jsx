import { StyledNav, StyledText } from "./style";
import { Nav, NavItem, Image, NavDropdown } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackIcon } from "../icon/index";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { addUserThunk } from "../../Store/modules/user/thunk";

const Header = () => {
  const [title, setTitle] = useState("");

  const { pathname } = useLocation();

  const { user } = useSelector((state) => state.user);
  console.log(user);

  const history = useHistory();
  useEffect(() => {
    pathname === "/vagas" && setTitle("Vagas");
    pathname === "/cadastroDeVagas" && setTitle("Cadastro de Vagas");
    pathname === "/minhasvagas" && setTitle("Minhas Vagas");
  }, [pathname]);

  const dispatch = useDispatch();
  const [cookies, setCookies, removeCookies] = useCookies();
  const logOut = () => {
    removeCookies("ID");
    removeCookies("token");
    dispatch(addUserThunk(""));
    history.push("/");
  };
  return (
    <StyledNav>
      <NavItem>
        <Nav.Link onClick={() => history.goBack()}>
          <BackIcon size="30px" />
        </Nav.Link>
      </NavItem>
      <NavItem>
        <StyledText>{title}</StyledText>
      </NavItem>
      <NavItem>
        <Image
          className="avatar"
          src={
            user.image
              ? user.image
              : "https://pbs.twimg.com/profile_images/1042181136720453632/yzc4rno0_400x400.jpg"
          }
          roundedCircle
        />
        <BackIcon className="menuitem" size="10px" />
        <NavDropdown align="right">
          <NavDropdown.Item onClick={() => history.push("/cadastroDeVagas")}>
            Adicionar Vaga
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => history.push("/minhasvagas")}>
            Minhas Vagas
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => history.push("/vagas")}>
            Vagas disponiveis
          </NavDropdown.Item>
          <NavDropdown.Item className="logOut" onClick={logOut}>
            Sair
          </NavDropdown.Item>
        </NavDropdown>
      </NavItem>
    </StyledNav>
  );
};

export default Header;

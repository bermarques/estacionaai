import { StyledNav } from "./style";
import { NavItem, Image } from "react-bootstrap";

const Header = () => {
  return (
    <StyledNav>
      <NavItem>
        <Image
          src="https://pbs.twimg.com/profile_images/1042181136720453632/yzc4rno0_400x400.jpg"
          roundedCircle
        />
      </NavItem>
    </StyledNav>
  );
};

export default Header;

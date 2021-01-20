import styled from "styled-components";
import { Nav } from "react-bootstrap";

export const StyledNav = styled(Nav)`
  box-shadow: 0px 2px 6px rgba(102, 102, 102, 0.2);
  height: 59px;
  align-content: center;
  justify-content: space-between;
  width: 100vw;
  max-width: 100%;

  .menuitem {
    transform: rotate(270deg);
    align-self: flex-end;
  }
  .nav-item {
    display: flex;
    margin: 0 10px;
  }

  .avatar {
    height: 50px;
    width: 50px;
  }
  .dropdown {
    width: 30px;
    height: 59px;
    position: absolute;
    a {
      opacity: 0;
    }
    .show {
      a {
        opacity: 1;
        color: #484848;
        font-weight: bold;
        font-size: 13px;
      }
      .logOut {
        color: #ff2e93;
      }
    }
  }

  img {
    align-self: center;
  }
`;

export const StyledText = styled.h3`
  color: #ff2e93;
  font-size: 16px;
  font-weight: bold;
  align-self: center;
`;

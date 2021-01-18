import styled, { css, createGlobalStyle } from "styled-components";
import { Alert } from "react-bootstrap";
import VisibilityIcon from "@material-ui/icons/Visibility";

const GlobalStyle = createGlobalStyle`

body {
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  font-family: 'Lato', sans-serif;
  background-color:#f7f7f7;
  max-width:100vw
}
`;

export default GlobalStyle;

export const StyledInput = styled.input`
  width: 275px;
  height: 45px;
  border-radius: 28.5px;
  border: none;
  margin: 10px 20px;
  outline: none;
  padding-left: 10px;

  :focus {
    border: 1px solid #ff2e93;

    border-radius: 28.5px;
  }
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  color: #484848;
  font-size: 13px;
  line-height: 27px;
  width: 100%;
  text-align: left;
  margin-left: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
`;

export const StyledButton = styled.button`
  margin-top: 20px;
  background-color: #152764;
  color: white;
  height: 45px;
  border: none;
  border-radius: 28.5px;
  width: 250px;
  margin-left: 1%;
  cursor: pointer;
  margin: 20px auto;
  outline: none;

  :hover {
    background-color: #05668d;
  }
  ${(props) => css`
    width: ${props.width};
  `}
`;

export const StyleAlert = styled(Alert)`
  position: absolute;
  top: 50vh;
  width: 80%;
  left: 10%;
  opacity: 0.7;
`;

export const StyleVisibilityIcon = styled(VisibilityIcon)`
  color: #ff2293;
  width: 5.25px;
  height: 5.25px;
  cursor: pointer;
  :hover {
    color: purple;
  }
`;

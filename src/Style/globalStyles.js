import styled, { css, createGlobalStyle } from "styled-components";
import { Alert } from "react-bootstrap";
import VisibilityIcon from "@material-ui/icons/Visibility";
import StarIcon from "@material-ui/icons/Star";

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

export const StyledSelect = styled.select`
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

export const ParkingCard = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  height: 250px;
  width: 200px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const MasterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const CardLabel = styled.label`
  font-weight: bold;
  color: #484848;
  font-size: 15px;
  line-height: 27px;
  width: 100%;
  text-align: center;
`;

export const CardDescription = styled.label`
  font-weight: bold;
  color: #484848;
  font-size: 20px;
  line-height: 27px;
  width: 100%;
  text-align: center;
`;

export const StyleStar = styled(StarIcon)`
  color: #01e6b4;
  width: 5.25px;
  height: 5.25px;
  cursor: pointer;
  :hover {
    color: purple;
  }
`;

export const CardAvaliation = styled.label`
  font-weight: bold;
  color: #01e6b4;
  font-size: 20px;
  line-height: 27px;
  width: 100%;
  text-align: center;
`;

export const StyledTitle = styled.label`
  font-weight: bold;
  color: #ff2e93;
  font-size: 20px;
  line-height: 27px;
  width: 100%;
  text-align: center;
  margin-top: 1%;
  margin-bottom: 1%;
`;

export const StyledUploadButton = styled.label`
  margin-top: 20px;
  background-color: #152764;
  color: white;
  height: 45px;
  border: none;
  border-radius: 28.5px;
  width: 100px;
  cursor: pointer;
  margin-left: 2%;
  outline: none;
  text-align: center;
  font-size: 20px;
  :hover {
    background-color: #05668d;
  }

  input {
    display: none;
    height: 100%;
    width: 100%;
  }
`;

export const ImageDiv = styled.div`
  width: 190px;
  height: 100px;
  border-radius: 28px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
`;

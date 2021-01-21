import styled, { css } from "styled-components";
import { Card } from "react-bootstrap";

export const StyledCard = styled(Card)`
  width: 90vw;
  margin: 20px auto;

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background-color: #01e6b4;
      border: none;
    }
  }
`;

export const MapContainer = styled.div`
  height: 0px;
  overflow: hidden;
  /* transition: 1s; */
  ${(props) =>
    props.show &&
    css`
      height: 200px;
    `}
`;

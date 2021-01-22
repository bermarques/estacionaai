import styled, { css } from "styled-components";
import { Card } from "react-bootstrap";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

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
  @media (min-width: 1200px) {
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    height: auto;
    width: 400px;
    max-width: 400px;
    border-radius: 5px;

    img {
      overflow: hidden;
      width: auto;
      height: 500px;
      max-width: 400px;
      max-height: 300px;
      margin: 0 auto;
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

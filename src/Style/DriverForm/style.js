import { Button, Input } from "@material-ui/core";
import styled from "styled-components";

export const formButton = styled(Button)`
  margin-top: 20px;
  background-color: #152764;
  color: white;
  height: 45px;
  border-radius: 28.5px;
  &:hover {
    background-color: #05668d;
  }
`;

export const formInput = styled(Input)`
  width: 275px;
  height: 45px;
  border-radius: 28.5px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 27px;
  color: #484848;
`;

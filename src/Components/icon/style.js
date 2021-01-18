import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 72px 0 46px 0;
`;

export const Icon = styled.img`
  ${(props) => css`
    height: ${props.size};
    width: ${props.size};
  `}
`;

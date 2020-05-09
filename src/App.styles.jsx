import styled, { keyframes } from "styled-components";

export const AppStyles = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  padding-right: 10px;
  color: rgb(201, 201, 201);
  text-transform: uppercase;
  font-size: 50px;
  text-shadow: 0px 10px 4px rgba(0, 0, 0, 0.5);
`;

const rotationSun = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const IconHeader = styled.i`
  color: rgb(252, 219, 31);
  text-shadow: none;
  animation: ${rotationSun} 10s infinite linear;
`;

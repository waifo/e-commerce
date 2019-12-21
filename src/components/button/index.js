import React from "react";
import styled, { css } from "styled-components";

const Normal = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const Inverted = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
const ButtonContainer = styled.button`
  ${props => (props.inverted ? Inverted : Normal)}
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px 0 35px;
  font-size: 12;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  margin: 5px;
  &:hover {
  }
`;

const Button = ({ children, ...otherProps }) => (
  <ButtonContainer {...otherProps}>{children}</ButtonContainer>
);

export default Button;

import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const InputContainer = styled.div`
  position: relative;
`;

const InputField = styled.input`
  background: none;
  background-color: white;
  border-bottom: 1px solid ${theme.grey.mid_dark};
  padding: 10px 10px 10px 5px;
  margin: 20px;
  width: 100%;
  font-size: ${theme.font_size.medium};
`;

const Label = styled.label`
  position: absolute;
  top: 15px;
  left: 25px;
  ${InputField}::hover {
    top: 5px;
    color: red;
  }
`;

const Input = ({ onChange, label, ...otherProps }) => (
  <InputContainer>
    {label ? <Label>{label}</Label> : null}
    <InputField onChange={onChange} {...otherProps} />
  </InputContainer>
);

export default Input;

import React from "react";
import styled from "styled-components";
import { H1, SubTitle } from "../globals";
const Container = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

const Card = props => (
  <Container size={props.size}>
    <Content>
      <H1>Hats</H1>
      <SubTitle>Shop Now</SubTitle>
    </Content>
  </Container>
);
export default Card;

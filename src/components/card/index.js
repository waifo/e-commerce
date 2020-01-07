import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { SubTitle } from "../globals";

const Container = styled.div`
height: ${({ size }) => (size ? "380px" : "240px")}
min-width: 30%;
overflow: hidden;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
margin: 0 7.5px 15px;
overflow: hidden;
&:hover {
  cursor: pointer;
  & .background-image {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
  & .content {
    opacity: 0.9;
  }
}
&:first-child {
  margin-right: 7.5px;
}
&:last-child {
  margin-left: 7.5px;
}
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
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

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

const Card = ({ title, imageUrl, linkUrl, history, match, size }) => (
  <Container size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <SubTitle>SHOP NOW</SubTitle>
    </ContentContainer>
  </Container>
);
export default withRouter(Card);

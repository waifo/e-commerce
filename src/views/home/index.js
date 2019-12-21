import React from "react";
import styled from "styled-components";
import Card from "../../components/card";

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 80px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Home = () => (
  <div>
    <HomeContainer>
      <Card size="small" />
      <Card size="small" />
      <Card size="small" />
      <Card size="large" />
      <Card size="large" />
    </HomeContainer>
  </div>
);

export default Home;

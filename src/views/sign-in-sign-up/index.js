import React from "react";
import styled from "styled-components";
import SignIn from "../../components/sign-in";
import SignUp from "../../components/sign-up";

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
`;

const SignInSignUp = () => {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
};

export default SignInSignUp;

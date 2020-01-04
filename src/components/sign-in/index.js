import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { H2, SubTitle } from "../globals";
import Input from "../input";
import Button from "../button";
import { theme } from "../../theme";

import { googleSignInStart, emailSignInStart } from "../../actions/user";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GoogleSignInButton = styled(Button)`
  background-color: ${theme.social.google.default};
  white-space: normal;
`;

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;
    emailSignInStart(email, password);
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email.trim(),
    //     password.trim
    //   );
    //   await createUserProfileDocument(user);
    // } catch (error) {
    //   console.log("Error in signing in", error.message);
    // }

    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { googleSignInStart, emailSignInStart } = this.props;
    return (
      <Container>
        <H2>I already have an account</H2>
        <SubTitle>Sign in with your email and password</SubTitle>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Buttons>
            <Button type="submit">Sign In</Button>
            <GoogleSignInButton type="button" onClick={googleSignInStart}>
              Sign in with google
            </GoogleSignInButton>
          </Buttons>
        </form>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);

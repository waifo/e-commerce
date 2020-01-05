import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { H2, SubTitle } from "../globals";
import Input from "../input";
import Button from "../button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
import { signUpStart } from "../../actions/user";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { signUpStart } = this.props;

    const { displayName, email, password, confirmPassword } = this.state;
    // event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    signUpStart({ email, password, displayName });
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   await createUserProfileDocument(user, { displayName });
    //   this.setState({
    //     displayName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    //   });
    // } catch (error) {
    //   console.log("Error", error.message);
    // }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <Container>
        <H2>I do not have an account</H2>
        <SubTitle>Sign up with your email and password</SubTitle>
        <form>
          <Input
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            onChange={this.handleChange}
          />
          <Input
            type="email"
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            onChange={this.handleChange}
          />
          <Button onClick={this.handleSubmit}>Sign Up</Button>
        </form>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: ({ email, password, displayName }) =>
    dispatch(signUpStart({ email, password, displayName }))
});

export default connect(null, mapDispatchToProps)(SignUp);

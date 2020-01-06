import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../selectors";

import Header from "../components/header";
import Home from "../views/home";
import Shop from "../views/shop";
import SignInSignUp from "../views/sign-in-sign-up";
import Checkout from "../views/checkout";

import { checkUSerSession } from "../actions/user";

class Routes extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUSerSession } = this.props;
    checkUSerSession();
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route
            exact={true}
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => {
  return {
    checkUSerSession: () => dispatch(checkUSerSession())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Routes);

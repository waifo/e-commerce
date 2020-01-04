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

import { setCurrentUser, checkUSerSession } from "../actions/user";

import { auth, createUserProfileDocument } from "../firebase/firebase.util";

class Routes extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, checkUSerSession } = this.props;
    checkUSerSession();
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data()
    //       });
    //     });
    //   }
    //   setCurrentUser(userAuth);
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
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
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    checkUSerSession: () => dispatch(checkUSerSession())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Routes);

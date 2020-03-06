import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { checkUSerSession } from "../actions/user";
import { selectCurrentUser } from "../selectors";
import Header from "../components/header";
import Spinner from "../components/spinner";

const Home = lazy(() => import("../views/home"));
const Shop = lazy(() => import("../views/shop"));
const Checkout = lazy(() => import("../views/checkout"));
const SignInSignUp = lazy(() => import("../views/sign-in-sign-up"));

const Routes = ({ checkUSerSession, currentUser }) => {
  useEffect(() => {
    checkUSerSession();
  }, [checkUSerSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact={true} path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route
            exact={true}
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
          <Route exact path="/checkout" component={Checkout} />
        </Suspense>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => {
  return {
    checkUSerSession: () => dispatch(checkUSerSession())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Routes);

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser, selectCartHidden } from "../../selectors";
import { auth } from "../../firebase/firebase.util";
import Cart from "../cart";
import { CrownIcon } from "../icons";
import CartDropdown from "../cart-dropdown";

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const HeaderOptions = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const HeaderLink = styled(Link)`
  padding: 10px 15px;
`;

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <CrownIcon />
    </LogoContainer>
    <HeaderOptions>
      <HeaderLink to="/shop">Shop</HeaderLink>
      <HeaderLink to="/contact">Contact</HeaderLink>
      {currentUser ? (
        <HeaderLink onClick={() => auth.signOut()}>Sign Out</HeaderLink>
      ) : (
        <HeaderLink to="/signin">Sign In</HeaderLink>
      )}
      <Cart />
    </HeaderOptions>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

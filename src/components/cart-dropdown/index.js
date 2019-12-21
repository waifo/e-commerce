import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-items";

import { selectCartItems } from "../../selectors";
import { toggleCartHidden } from "../../actions/cart";

import Button from "../button";
import { SubTitle } from "../globals";

const DropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display:flex;
  flex-direction:column;
  padding:20px;
  top:80px;
  right:0;
  z-index:5
  background-color:white;
  border: 1px solid black;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 240px;
`;
const CheckoutButton = styled.div`
  margin-top: auto;
`;
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <DropdownContainer>
    {cartItems.length ? (
      <CartItems>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItems>
    ) : (
      <SubTitle>Your cart is empty</SubTitle>
    )}
    <CheckoutButton>
      <Button
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go To Checkout
      </Button>
    </CheckoutButton>
  </DropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item";

import { selectCartItems, selectCartTotal } from "../../selectors";

import { theme } from "../../theme";
import { SubTitle, Title } from "../../components/globals";

const CheckoutContainer = styled.div`
  width: 70%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;
const CheckoutHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const HeaderItem = styled.div`
  width: 23%;
  border-bottom: 1px solid ${theme.grey.mid_dark};
  &:last-child {
    width: 8%;
  }
`;

const Total = styled(Title)`
  font-size: 22px;
  font-weight: bold;
  margin-top: 30px;
  margin-left: auto;
`;

const Checkout = ({ cartItems, total }) => (
  <CheckoutContainer>
    <CheckoutHeader>
      <HeaderItem>
        <SubTitle>Product</SubTitle>
      </HeaderItem>
      <HeaderItem>
        <SubTitle>Description</SubTitle>
      </HeaderItem>
      <HeaderItem>
        <SubTitle>Quantity</SubTitle>
      </HeaderItem>
      <HeaderItem>
        <SubTitle>Price</SubTitle>
      </HeaderItem>
      <HeaderItem>
        <SubTitle>Remove</SubTitle>
      </HeaderItem>
    </CheckoutHeader>
    {cartItems.map(item => (
      <CheckoutItem id={item.id} cartItem={item} />
    ))}
    <Total>
      Total : <SubTitle>&#8377;{total}</SubTitle>
    </Total>
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);

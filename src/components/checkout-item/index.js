import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { addItem, removeItem, clearItemFromCart } from "../../actions/cart";

import { SubTitle } from "../globals";

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid darkgrey;
  justify-content: space-between;
  padding: 15px 0;
  ${SubTitle} {
    width: 23%;
  }
`;
const ImageContainer = styled.img`
  width: 23%;
  padding-right: 15px;
`;

const RemoveButton = styled.div`
  width: 8%;
  cursor: pointer;
`;

const Arrow = styled.span`
  cursor: pointer;
`;
const Quantity = styled.span`
  margin: 0 10px;
`;
const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <Container>
      <ImageContainer src={imageUrl} />
      <SubTitle>{name}</SubTitle>
      <SubTitle>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <Quantity>{quantity}</Quantity>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </SubTitle>

      <SubTitle>{price}</SubTitle>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </Container>
  );
};

const matchDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, matchDispatchToProps)(CheckoutItem);

import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../actions/cart";
import { selectCartItemsCount } from "../../selectors";
import { CartIcon } from "../icons";

const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledCartIcon = styled.div`
  width: 24px;
  height: 24px;
`;
const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  right: 45%;
`;

const Cart = ({ toggleCartHidden, itemsCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <StyledCartIcon>
      <CartIcon />
    </StyledCartIcon>
    <ItemCount>{itemsCount}</ItemCount>
  </CartContainer>
);

const matchDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemsCount: selectCartItemsCount(state)
});
export default connect(mapStateToProps, matchDispatchToProps)(Cart);

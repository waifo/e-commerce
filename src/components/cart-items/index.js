import React from "react";
import styled from "styled-components";
import { SubTitle } from "../globals";

const ItemContainer = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 30%;
  padding: 5px;
`;
const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  justify-content: center;
`;
const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <ItemContainer>
    <Image src={imageUrl} />
    <ItemDetails>
      <SubTitle>{name}</SubTitle>
      <SubTitle>
        {quantity} x {price}
      </SubTitle>
    </ItemDetails>
  </ItemContainer>
);

export default CartItem;

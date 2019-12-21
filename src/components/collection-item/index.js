import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Button from "../button";
import { SubTitle } from "../globals";
import { addItem } from "../../actions/cart";

const AddToCartButton = styled(Button)`
  position: absolute;
  opacity: 0.7;
  bottom: 15%;
  margin-left: 0;
  margin-right: 0;
  display: none;
`;

const PhotoContainer = styled.div`
  grid-area: cover;
  posiiton: relative;
  width: 100%;
  background-image: ${props =>
    props.coverURL ? `url(${props.coverURL})` : "none"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid black;
  height: 95%;
  margin-bottom: 5px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 22vw;
  height: 350px;
  cursor: pointer;
  position: relative;
  margin-bottom: 30px;
  &:hover {
    ${AddToCartButton} {
      display: flex;
    }
    ${PhotoContainer} {
      opacity: 0.85;
    }
  }
`;

const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NameSubTitle = styled(SubTitle)`
  width: 90%;
  margin-bottom: 15px;
`;
const PriceSubTitle = styled(SubTitle)`
  width: 10%;
`;

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <ItemContainer>
      <PhotoContainer coverURL={imageUrl}></PhotoContainer>
      <ItemFooter>
        <NameSubTitle>{name}</NameSubTitle>
        <PriceSubTitle>{price}</PriceSubTitle>
      </ItemFooter>
      <AddToCartButton inverted onClick={() => addItem(item)}>
        Add to cart
      </AddToCartButton>
    </ItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);

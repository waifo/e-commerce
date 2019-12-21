import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { selectShopCollection } from "../../selectors";
import CollectionItem from "../../components/collection-item";

const CategoryContainer = styled.div`
  //   display: flex;
`;
const Title = styled.h2`
  margin: 10px auto 20px;
  text-align: center;
  font-size: 28px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Category = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CategoryContainer>
      <Title>{title}</Title>
      <Items>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </CategoryContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(Category);

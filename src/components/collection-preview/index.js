import React from "react";
import styled from "styled-components";
import { H2 } from "../globals";
import CollectionItem from "../collection-item";

const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Item = styled.div``;

const CollectionPreview = ({ title, items }) => (
  <CollectionContainer>
    <H2>{title.toUpperCase()}</H2>
    <Preview>
      {items
        .filter((item, id) => id < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </CollectionContainer>
);

export default CollectionPreview;

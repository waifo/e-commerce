import React from "react";
import styled from "styled-components";

import CollectionPreview from "../collection-preview";

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionOverview = ({ collections }) => (
  <OverviewContainer>
    {collections.map(({ _id, ...otherCollectionProps }) => (
      <CollectionPreview key={_id} {...otherCollectionProps} />
    ))}
  </OverviewContainer>
);

export default CollectionOverview;

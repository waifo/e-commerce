import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";

import Spinner from "../spinner";
import { GET_COLLECTIONS } from "../../graphql/queries/product";
import Card from "../card";

const DirectoryContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 80px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Directory = () => (
  <DirectoryContainer>
    <Query query={GET_COLLECTIONS}>
      {({ loading, error, data }) => {
        if (loading) return <Spinner />;
        return data.collections.map(({ _id, ...otherProps }) => (
          <Card key={_id} {...otherProps} />
        ));
      }}
    </Query>
  </DirectoryContainer>
);

export default Directory;

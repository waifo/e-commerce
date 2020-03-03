import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import CollectionOverview from "./index";
import Spinner from "../spinner";
import { GET_COLLECTIONS } from "../../graphql/queries/product";

const CollectionOverviewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner />;
      return <CollectionOverview collections={data.collections} />;
    }}
  </Query>
);

export default CollectionOverviewContainer;

import React from "react";
import { Query } from "react-apollo";

import Category from "./category";
import Spinner from "../../components/spinner";
import { GET_COLLECTION_BY_TITLE } from "../../graphql/queries/product";

const CategoryContainer = ({ match }) => (
  <Query
    query={GET_COLLECTION_BY_TITLE}
    variables={{
      title: match.params.categoryId
    }}
  >
    {({ loading, data }) => {
      if (loading) return <Spinner />;
      return <Category collection={data.collectionByTitle} />;
    }}
  </Query>
);

export default CategoryContainer;

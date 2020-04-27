import { gql } from "apollo-boost";

export const GET_COLLECTIONS = gql`
  {
    collections {
      _id
      title
      imageUrl
    }
  }
`;

export const GET_COLLECTION_BY_TITLE = gql`
  query getProductsByCategory($category: String) {
    productsByCategory(title: $category) {
      _id
      title
      price
      imageUrl
    }
  }
`;

import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient, gql } from "apollo-boost";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/api"
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

client
  .query({
    query: gql`
      {
        collections {
          id
          title
        }
      }
    `
  })
  .then(res => console.log(res))
  .catch(error => console.log(error));

export default client;

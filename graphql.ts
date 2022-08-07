import {
  HttpLink,
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql",
});

export const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

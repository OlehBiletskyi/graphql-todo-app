const { ApolloClient, InMemoryCache } = require('@apollo/client');

export const client  = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_URL}`,
  cache: new InMemoryCache(),
  connectToDevTools: true
})
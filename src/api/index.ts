import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(`GQl error ${message}`);
    });
  }
});
const authLink = setContext(async (_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:5000/graphql' }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});

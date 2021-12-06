import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/index';
import './index.css';

// const client = new ApolloClient({
//   uri: 'https://api.spacex.land/graphql/',
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          launchesPast: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: false,
            // Concatenate the incoming list items with
            // the existing list items.
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

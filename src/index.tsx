import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import { SignedInContextProvider } from './context/SignedInContext';
import { client } from './api';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <SignedInContextProvider>
        <App />
      </SignedInContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

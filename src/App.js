import React, { Component } from 'react';
import CardList from './components/CardList';
import SaveButton from './components/SaveButton';
import logo from './logo.svg';
import './App.css';

import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT }),
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2><div class="tooltip">Transcriber<span class="tooltiptext">Transcriber <span class="underline">r</span>eproduces <span class="underline">a</span>nalytical, <span class="underline">n</span>eat, similarly-comprehensive reviews, incorporating #bestpractices every rendition</span></div> will help you conduct different types of reviews and audits</h2>
          </div>
          <div className="App-User">
            <CardList />
          </div>
          <SaveButton />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

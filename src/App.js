import React, { Component } from 'react';
import CardList from './components/CardList';
import ActionButtons from './components/ActionButtons';
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
            <h2>
              <div className="tooltip">Transcriber<span className="tooltiptext">Transcriber <span className="underline">r</span>eproduces <span className="underline">a</span>nalytical, <span className="underline">n</span>eat, similarly-comprehensive reviews, incorporating #bestpractices every rendition</span></div>
              &nbsp;helps you conduct different types of reviews and audits<br/>and is powered by content from this <a target="_blank" rel="noopener noreferrer" href="https://app.getguru.com/boards/yiKXnGpi/Transcriber">Guru board</a></h2>
          </div>
          <div className="App-User">
            <CardList />
          </div>
          <ActionButtons />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

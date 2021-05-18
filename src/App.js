import React, { Component } from "react";
import CardList from "./components/CardList";
import ActionButtons from "./components/ActionButtons";
import { logoImg, urls } from "./components/Constants";
import { Auth, AuthContextProvider, useAuth } from "./components/Auth";
import "./App.css";

import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  link: new HttpLink({ uri: urls.graphQL }),
  cache: new InMemoryCache(),
});

const AppInner = () => {
  const { authProps } = useAuth()
  if (! authProps?.token?.access_token) {return <Auth/>}
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logoImg} className="App-logo" alt="logo" />
            <h2>
              <div className="tooltip">
                Transcriber
                <span className="tooltiptext">
                  Transcriber <span className="underline">r</span>eproduces{" "}
                  <span className="underline">a</span>nalytical,{" "}
                  <span className="underline">n</span>eat,
                  similarly-comprehensive reviews, incorporating #bestpractices
                  every rendition
                </span>
              </div>
              &nbsp;helps you conduct different types of reviews and audits
              <br />
              and is powered by content from this{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={urls.guru}
              >
                Guru board
              </a>
              &nbsp;&nbsp;&nbsp;<span className="version">v0.1.5</span>
            </h2>
          </div>
          <div className="App-User">
            <CardList />
          </div>
          <ActionButtons/>
        </div>
      </ApolloProvider>
    );
}

const App = () => {
  return (
    <AuthContextProvider><AppInner/></AuthContextProvider>
  )
}

export default App;

import React, { useContext, useEffect, useState } from "react";
import { CardList } from "./components/CardList";
import ActionButtons from "./components/ActionButtons";
import { logoImg, urls } from "./components/Constants";
import { AppContext, AppContextProvider } from "./components/AppContext";
import { Auth } from './components/Auth'
import Cookie from 'js-cookie'
import "./App.css";

import { ApolloClient, ApolloProvider } from "@apollo/client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  link: new HttpLink({ uri: urls.graphQL }),
  cache: new InMemoryCache(),
});

const StyledWord = (props) => {
  return (
    <><span className="underline">{props.text.slice(0,1)}</span>{props.text.slice(1,)}{" "}</>
  )
}

const AppInner = () => {
  const { loggedIn } = useContext(AppContext)

      {return loggedIn ? (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logoImg} className="App-logo" alt="logo" />
            <h2>
              <div className="tooltip">
                Transcriber
                <span className="tooltiptext">
                  Transcriber{" "}
                  <StyledWord text={'reproduces'}/>
                  <StyledWord text={'analytical,'}/>
                  <StyledWord text={'neat'}/>
                  <StyledWord text={'similarly'}/>
                  <StyledWord text={'comprehensive'}/>
                  <StyledWord text={'reviews'}/>
                  <StyledWord text={'incorporating'}/>
                  <StyledWord text={'best practices'}/>
                  <StyledWord text={'every'}/>
                  <StyledWord text={'rendition'}/>
                  </span>
              </div>
              &nbsp;helps you conduct different types of reviews and audits<br />
              and is powered by content from this{" "}
              <a target="_blank" rel="noopener noreferrer" href={urls.guru}>Guru board</a>&nbsp;&nbsp;&nbsp;<span className="version">v0.1.5</span>
            </h2>
          </div>
          <div className="App-User">
            <CardList />
          </div>
          <ActionButtons/>
        </div>
      </ApolloProvider>
    ) : <Auth/> }
}

const App = () => {
  return (
    <AppContextProvider><AppInner/></AppContextProvider>
  )
}

export default App;

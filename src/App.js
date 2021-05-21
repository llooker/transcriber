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

const AppInner = () => {
  const { shouldLogIn } = useContext(AppContext)
  const [loggedIn, setLoggedIn] = useState(false)
  
  useEffect(() => {
    setLoggedIn(!shouldLogIn())
  }, [Cookie.get('gtoken')])
  
  {return loggedIn ? (
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
                  <span className="underline">n</span>eat,{" "}
                  <span className="underline">s</span>imilarly{"-"}
                  <span className="underline">c</span>omprehensive{" "}
                  <span className="underline">r</span>eviews,{" "}
                  <span className="underline">i</span>ncorporating{" #"}
                  <span className="underline">b</span>estpractices{" "}
                  <span className="underline">e</span>very{" "}
                  <span className="underline">r</span>endition
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
    ) : <Auth/> 
  }
}

const App = () => {
  return (
    <AppContextProvider><AppInner/></AppContextProvider>
  )
}

export default App;

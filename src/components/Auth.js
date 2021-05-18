import React, { createContext, useContext, useState } from "react";
import styled from 'styled-components'
import { GoogleLogin } from 'react-google-login';

const AuthCard = styled.div`
  margin: auto;
  padding: 20px;
  width: 600px;
  max-width: 100%;
  text-align: left;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.3);
`;

const clientID = process.env.REACT_APP_GCLIENT_ID;

export const AuthContext = createContext({authProps: undefined, logIn: () => {}, logOut: () => {}})

export const AuthContextProvider = (props) => {
    const [authProps, setAuthProps] = useState(undefined)
    const logIn = (res) => {
        setAuthProps({token: {...res.tokenObj}, user: {...res.profileObj}})
    }
    const logOut = (res) => {
        console.error(`Auth error: ${res}`)
        setAuthProps(undefined);
    }

    const contextValue = {authProps, logIn, logOut}
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const { authProps, logIn, logOut } = useContext(AuthContext);
    return { authProps, logIn, logOut };
}

export const Auth = () => {
    const { logIn, logOut } = useAuth()
    return (
        <AuthCard>
            <h5 style={{marginBottom:'10px'}}>Authenticate with Google to view this Content</h5>
            <GoogleLogin
                clientId={clientID}
                buttonText="Login with Google"
                onSuccess={logIn}
                onFailure={logOut}
                cookiePolicy={'single_host_origin'}
                />
        </AuthCard>
    )
}
  
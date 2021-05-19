import React, { useContext } from 'react'
import { AppContext } from './AppContext'
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components'

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


export const Auth = () => {
    const { logIn, logOut } = useContext(AppContext)
    return (
        <AuthCard>
            <h5 style={{marginBottom:'10px'}}>Authenticate with Google to view this Content</h5>
            <GoogleLogin
                clientId={process.env.REACT_APP_GCLIENT_ID}
                buttonText="Login with Google"
                onSuccess={logIn}
                onFailure={logOut}
                cookiePolicy={'single_host_origin'}
                />
        </AuthCard>
    )
}